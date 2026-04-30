import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-background">
      <main className="flex items-center justify-center">
        <section>
          <Home />
        </section>
        {/* <Image
          src={"/glossy_sphere_2.png"}
          alt="glossy sphere"
          width={70}
          height={70}
          sizes="80px"
          className="drop-shadow-lg"
        /> */}
      </main>
    </div>
  );
}
