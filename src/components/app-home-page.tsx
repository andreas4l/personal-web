import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function AppHomePage() {
  return (
    <div className="flex flex-col  items-center justify-between h-screen md:flex-row pt-30" id="home">
      <div className="w-full flex flex-col gap-6 md:w-1/2 md:gap-8">
        <p className="text-muted-foreground text-3xl">{"Hello, I'm"}</p>
        <p className="font-bold text-6xl bg-gradient-to-r from-[#0938FE] to-[#9078FF] bg-clip-text text-transparent">
          Andreas Alberto
        </p>
        <Image
          src="/hero.png"
          alt="hero image"
          width={500}
          height={300}
          className="scale-x-[-1] rounded-xl md:hidden w-full"
        />
        <p className="text-4xl font-bold">
          Computer Science Student & Web Development Enthusiast
        </p>
        <p className="text-2xl">
          I am currently studying web development and building small projects to
          improve my skills. I am very enthusiastic about technology and always
          eager to explore new challenges.
        </p>
        <div className="flex gap-16 md:gap-14 justify-center md:justify-start">
          <Link href={"#project"}>
            <Button className="font-bold text-xl p-6  border-3 border-[#0938FE] bg-gradient-to-r from-[#0938FE] to-[#9078FF] cursor-pointer">
              Project
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="font-bold text-xl text-[#0938FE] p-6 border-3 border-[#0938FE] bg-transparent hover:bg-transparent cursor-pointer">
              Contact
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src="/hero.png"
        alt="hero image"
        width={500}
        height={300}
        className="scale-x-[-1] rounded-xl w-full hidden md:block md:w-1/2"
      />
    </div>
  );
}
