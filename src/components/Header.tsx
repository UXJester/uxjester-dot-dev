import Image from "next/image";
import { Navigation } from "@/components";

export const Header = () => {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between bg-white p-6 shadow-md">
      <h1 className="flex items-center gap-1 text-2xl font-bold">
        <Image
          src="/images/Bryan_Cartoon_Small.png"
          alt="Profile Picture"
          width={50}
          height={50}
          className="rounded-full"
        />
        UXJester Dot Dev
      </h1>
      <Navigation />
    </header>
  );
};
