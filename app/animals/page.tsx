import { CreateButton } from "@/components/buttons";
import Search from "@/components/search";
import AnimalTable from "@/components/animal-table";
import Pagination from "@/components/pagination";
import { getAnimalPages } from "@/lib/data";
import { Suspense } from "react";
import { TableSkeletons } from "@/components/skeletons";

const AnimalsPage = async ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: number };
}) => {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;

  const totalPages = await getAnimalPages(query);

  return (
    <main className="relative mx-auto min-h-screen max-w-screen-xl px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-8">
      <hgroup className="mb-5 flex items-center justify-between gap-1">
        <Search />
        <CreateButton />
      </hgroup>
      <section className="max-w-full overflow-x-scroll">
        <Suspense key={query + currentPage} fallback={<TableSkeletons />}>
          <AnimalTable query={query} currentPage={currentPage} />
        </Suspense>
      </section>
      <div className="absolute bottom-0 left-1/2 mt-4 flex -translate-x-1/2 justify-center pb-8 sm:pb-24 lg:pb-8">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
};

export default AnimalsPage;
