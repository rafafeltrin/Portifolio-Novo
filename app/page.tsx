import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import LampDemo from "@/components/ui/lamp";
import { LampContainer } from "@/components/ui/lamp";
export default function Home() {
  const words = [
    {
      text: "Desenvolvendo",
    },
    {
      text: "ideias",
    },
    {
      text: "através",
    },
    {
      text: "do",
    },
    {
      text: "Software.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <main className="h-full min-h-screen w-full bg-gradient-to-tr from-[#030014] to-[#090121] flex flex-col items-center justify-center">
      <div className="max-w-4xl md:w-70% p-4 h-screen flex flex-col items-center justify-center">
        <TypewriterEffect className="text-4xl md:text-6xl" words={words}/>
        <h2 className="text-2xl text-white text-center my-5">
          Olá eu sou Rafael Feltrin, estudante de Ciência da computação
        </h2>
        <h2 className="text-2xl text-white">
          Arraste para baixo e conheça um pouco de mim
        </h2>
      </div>
      <BackgroundBeams />
      <div className="flex w-full">
        <LampContainer>
          <p className="text-4xl md:text-6xl text-slate-300 bg-clip-text text-transparent font-semibold">Meus Projetos</p>
        </LampContainer>
      </div>
      
    </main>
  );
}
