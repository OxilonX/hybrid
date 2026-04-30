"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="flex items-center justify-between ">
      <div className="">
        <Image
          src={"hybrid_logo.svg"}
          alt="Hybrid Logo"
          width={80}
          height={80}
          sizes="80px"
          className="brightness-0"
        />
      </div>
      <Tabs defaultValue="home">
        <TabsList variant="line">
          <TabsTrigger value="home" onClick={() => scrollToSection("home")}>
            Home
          </TabsTrigger>
          <TabsTrigger value="about" onClick={() => scrollToSection("about")}>
            About
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </header>
  );
};

export default Header;
