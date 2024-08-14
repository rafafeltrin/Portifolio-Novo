"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import {FaGithub, FaLink } from 'react-icons/fa';
import Link from "next/link";

export function CardProjetos({
    titulo,
    subtitulo,
    imagem,
    github,
    link
  }: {
    titulo?: string;
    subtitulo?: string;
    imagem?: string;
    github?: string;
    link?: string;
  }) {
    return (
        <CardContainer className="inter-var mx-2">
            <CardBody className="group/card hoer:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="10"
                    className="text-xl font-bold text-white"
                >
                    {titulo}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="10"
                    className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                    {subtitulo}
                </CardItem>
                <CardItem translateZ="40" className="w-full mt-4">
                    <img
                        src={imagem}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <div className="flex">
                        <a href={github} target="_blank" className="text-white px-2 hover:text-gray-300 transition duration-300">
                            <FaGithub size={40} />
                        </a>
                        <a href={link} target="_blank" className="text-white px-2 hover:text-gray-300 transition duration-300">
                            <FaLink size={40} />
                        </a>
                    </div>
                    
                    <CardItem
                        translateZ={10}
                        as="button"
                        className="px-5 py-2 rounded-xl bg-white text-black text-sm font-bold"
                    >
                        Ver mais
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
