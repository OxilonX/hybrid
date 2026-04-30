import Image from "next/image";
import HomePage from "@/components/sections/HomePage";
export default function Home() {
  return (
    <div className=" bg-background">
      <main className=" flex items-center w-full">
        <section className="py-6 w-full">
          <HomePage />
        </section>
      </main>
    </div>
  );
}
