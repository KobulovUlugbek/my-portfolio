"use client";

import {
  FaReact,
  FaAngular,
  FaJs,
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJira,
  FaServer,
  FaShapes,
} from "react-icons/fa";

import { SiGraphql, SiTailwindcss, SiTypescript } from "react-icons/si";

// about data

const about = {
  title: "Über mich",
  description:
    "Als leidenschaftlicher und engagierter Webentwickler spezialisiere ich mich auf die Erstellung effizienter und skalierbarer Front-End-Architekturen. Mein Fachwissen liegt darin, die neuesten Webtechnologien zu nutzen, um responsive, intuitive Schnittstellen zu schaffen, die die Interaktion und Zufriedenheit der Benutzer verbessern. Ich bin bestrebt, kontinuierlich zu lernen und innovative Lösungen zur Lösung komplexer Probleme in der Webentwicklung anzuwenden.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ulugbek Kobulov",
    },
    {
      fieldName: "Telefon",
      fieldValue: "(+49)15157338840",
      href: "tel:+4915157338840",
    },
    {
      fieldName: "Erfahrung",
      fieldValue: "Mehr als 2 Jahre",
    },
    {
      fieldName: "Email",
      fieldValue: "contact@ulugbek-kobulov.com",
      href: "mailto:contact@ulugbek-kobulov.com",
    },
    {
      fieldName: "Freiberuflich",
      fieldValue: "Verfügbar",
    },
    {
      fieldName: "Sprachen",
      fieldValue: "Deutsch, Englisch, Russisch, Usbekisch",
    },
  ],
};

// experience data

const experience = {
  icon: "public/next.svg",
  title: "Meine Erfahrungen",
  description:
    "Ich bringe eine umfassende Erfahrung in der Webentwicklung mit, insbesondere in der Gestaltung responsiver und benutzerfreundlicher Front-End-Designs. Meine berufliche Laufbahn umfasst intensive Praxisschulungen in Webapplikationen und Front-End-Technologien, in denen ich spezialisierte Fähigkeiten zur Optimierung von Benutzererfahrung und Schnittstellendesign entwickelt habe.",
  items: [
    {
      company: "Digital A-Team",
      position: "Frontend Entwickler",
      duration: "2023 - 2024",
    },
    {
      company: "Die Zieglerschen - Diakonie Stetten",
      position: "Arbeitserzieher",
      duration: "2021-2023",
    },
    {
      company: "Die Zieglerschen - Diakonie Stetten",
      position: "FsJ - Freiwilliges Soziales Jahr",
      duration: "2017-2018",
    },
    {
      company: "Autohaus Chevrolet and Daewoo",
      position: "Kfz-Mechatroniker",
      duration: "2013-2017",
    },
  ],
};

// education data

const education = {
  icon: "public/next.svg",
  title: "Meine Ausbildung",
  description:
    "Mein Bildungsweg verbindet technische und soziale Ausbildungen, darunter ein Front-End Webentwicklung Bootcamp, eine Zertifizierung als Arbeitserzieher und eine Ausbildung als Kfz-Mechaniker. Diese Kombination verleiht mir tiefgehende technische Kenntnisse und ausgeprägte kommunikative Fähigkeiten, die es mir ermöglichen, Webprojekte effektiv und lösungsorientiert umzusetzen.",
  items: [
    {
      institution: "Weiterbildung - Developer Akademie",
      degree: "Front-End Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Diakonisches Institut für Soziale Berufe",
      degree: "Staatlich anerkannter Arbeitserzieher",
      duration: "2018-2021",
    },
    {
      institution: "Technische Berufsschule",
      degree: "Zertifizierter Kfz-Mechaniker",
      duration: "2010-2013",
    },
  ],
};

// skills data

const skills = {
  title: "Meine Fähigkeiten",
  description:
    "Ich habe eine starke Basis in der Front-End-Entwicklung und bin auf die Gestaltung responsiver und benutzerfreundlicher Interfaces spezialisiert. Meine Kompetenzen erstrecken sich über diverse Front-End-Technologien, mit denen ich effiziente und skalierbare Webanwendungen realisiere, die sowohl die Benutzererfahrung als auch die Nutzerbindung verbessern. Folgende Technologien beherrsche ich sicher:",
  skillList: [
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaShapes />,
      name: "Ant Design",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaJira />,
      name: "Jira",
    },
    {
      icon: <FaServer />,
      name: "Firebase",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Erfahrungen</TabsTrigger>
            <TabsTrigger value="education">Ausbildung</TabsTrigger>
            <TabsTrigger value="skills">Fähigkeiten</TabsTrigger>
            <TabsTrigger value="about">Über mich</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    const noWrapStyle = item.fieldValue.includes("@")
                      ? { whiteSpace: "nowrap" }
                      : {};
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl" style={noWrapStyle}>
                          <a
                            target="_blank"
                            className="text-xl"
                            style={noWrapStyle}
                            href={item.href}
                          >
                            {item.fieldValue}
                          </a>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
