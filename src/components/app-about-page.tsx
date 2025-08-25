import Image from "next/image";
export function AppAboutPage() {
  return (
    <div className="h-screen pt-30" id="about">
      <p className="font-bold text-6xl">About Me</p>
      <Image
        src={"/hero.png"}
        width={100}
        height={100}
        alt="hero"
        className=""
      />
      <p></p>
    </div>
  );
}
