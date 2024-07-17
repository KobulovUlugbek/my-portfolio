"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "project 1",
    description:
      "Dieses Projekt ist eine Webanwendung, die es Nutzern ermöglicht, Video- und Audioaufnahmen zu erstellen. Sie bietet verschiedene Modi für Bildschirm- und Kameraaufnahmen, ideal für Präsentationen. Zusätzliche Funktionen umfassen Hintergrundauswahl, Blur-Effekte, Bildupload und Audiopegelanzeige. Aufgenommene Medien können direkt gespeichert werden",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Ant Design" },
      { name: "TensorFlow Js" },
    ],
    image: "/assets/project_img/recorder.png",
    live: "https://ulugbek-kobulov.com/recorder/",
    github: "",
  },
  {
    num: "02",
    category: "Web Development",
    title: "project 2",
    description:"Mein Portfolio nutzt neueste Webtechnologien wie React und Next.js, um meine Entwicklerprojekte und -fähigkeiten effektiv darzustellen. Die Website zeichnet sich durch schnelle Ladezeiten und eine benutzerfreundliche, responsive Gestaltung mittels Tailwind CSS aus. Subtile Animationen durch Framer Motion verbessern das visuelle Erlebnis. Ein PHP-Backend ermöglicht zudem schnelles Feedback auf Nutzeranfragen.",
    stack: [
      { name: "React & Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "PHP" },
    ],
    image: "/assets/project_img/portfolio.png",
    live: "https://ulugbek-kobulov.com",
    github: "https://github.com/KobulovUlugbek/my-portfolio",
  },
  {
    num: "03",
    category: "Web Development",
    title: "project 3",
    description:
      "Die auf Angular und TypeScript basierende TrailerFlix-Website ist eine dynamische Plattform, die über eine API JSON-Daten abruft und auf deren Basis die gesamte Website generiert. Diese innovative Anwendung bietet den Nutzern ein nahtloses Erlebnis beim Ansehen von Filmtrailern und Informationen.",
    stack: [
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "API" },
      { name: "SCSS" },
    ],
    image: "/assets/project_img/trailerflix.png",
    live: "https://ulugbek-kobulov.com/trailerflix/",
    github: "https://github.com/KobulovUlugbek/TrailerFlix",
  },
  {
    num: "04",
    category: "Web Development",
    title: "project 4",
    description:
      "Das objektorientierte Spiel 'Jump, Run, and Throw' kombiniert ein durchdachtes Design mit einem spannenden Gameplay. Spieler helfen Pepe dabei, Münzen zu sammeln und mit Tabasco-Salsa die Herausforderungen zu überwinden. Durch die Integration von interaktiven Elementen und dynamischen Power-Ups entsteht ein packendes Spielerlebnis.",
    stack: [{ name: "JavaScript" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/project_img/elpolloloco.png",
    live: "https://ulugbek-kobulov.com/jump-and-run/",
    github: "https://github.com/KobulovUlugbek/El-POLLO-LOCO",
  },
  {
    num: "05",
    category: "Web Development",
    title: "project 5",
    description:
      "Ich habe eine intuitive Aufgabenverwaltungslösung basierend auf dem Kanban-System entwickelt. Sie ermöglicht das einfache Anordnen von Aufgaben per Drag-and-Drop. Nutzer können Aufgaben Teammitgliedern zuweisen und übersichtlich kategorisieren, was die Organisation vereinfacht und die Benutzerfreundlichkeit steigert.",
    stack: [{ name: "JavaScript" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/project_img/joindummy.png",
    live: "https://ulugbek-kobulov.com/join/",
    github: "https://github.com/KobulovUlugbek/Join",
  },
];

export const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, /* delay: 2.4, */ ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project btn */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project btn */}
                {project.github && (

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github reprository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerview={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider btn */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
               xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]
               flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
