import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import LampDemo from "@/components/ui/lamp";
import { LampContainer } from "@/components/ui/lamp";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Navbar from "@/components/navbar";
import { CardProjetos } from "@/components/cardProjetos";
import { Cover } from "@/components/ui/cover";

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
      <Navbar />
      <div id="inicio" className="max-w-4xl md:w-70% p-4 h-screen flex flex-col items-center justify-between">
        <div className="h-5/6 flex flex-col justify-center">
          <TypewriterEffect className="text-4xl md:text-6xl" words={words} />
          <h2 className="text-2xl text-white text-center my-5">
            Olá eu sou Rafael Feltrin, estudante de Ciência da computação
          </h2>
        </div>

        <div className="text-center">
          <HoverBorderGradient className="bg-[#000D1D]">
            Arraste para baixo ↓
          </HoverBorderGradient>
        </div>
      </div>
      <BackgroundBeams />
      <div id="projetos" className="flex flex-col w-full h-auto mt-10">
        <div className="text-4xl md:text-6xl text-center text-white bg-clip-text font-semibold mb-10">Meus <Cover>Projetos</Cover></div>
        <div className="md:flex justify-center">
          <CardProjetos 
            titulo="LibrasLearn"
            subtitulo="Esse pwei werwerm weroq oqwmqm qowqw rm"
            github="#"
            link="#"
            imagem="/libras.png"
          />
          <CardProjetos 
            titulo="MovieHub"
            subtitulo="Esse pwei werwerm weroq oqwmqm qowqw rm"
            github="https://github.com/rafafeltrin/movie-hub"
            link="#"
            imagem="/moviehub.png"
          />
        </div>
      </div>
    </main>
  );
}
