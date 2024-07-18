import { CreateButton } from "@/components/buttons";
import Search from "@/components/search";
import ZooTable from "@/components/zoo-table";

const AnimalsPage = () => {
  return (
    <main className="relative mx-auto min-h-screen max-w-screen-md px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-8">
      <hgroup className="mb-5 flex items-center justify-between gap-1">
        <Search />
				<CreateButton />
      </hgroup>
      <section className="max-w-full overflow-x-scroll">
        <ZooTable />
      </section>
    </main>
  );
};

export default AnimalsPage;
