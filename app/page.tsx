import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-4 select-none p-24">
      <h1 className="text-xl sm:text-2xl lg:text-4xl">Animal List App</h1>
      <Link href={"/animals"} className="px-4 py-2 bg-sky-500 text-white rounded-md">Get Started</Link>
    </main>
  );
}
