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
  title: "About me",
  description:
    "As a passionate and dedicated Web Developer, I specialize in crafting efficient and scalable front-end architectures. My expertise lies in leveraging the latest web technologies to create responsive, intuitive interfaces that enhance user interaction and satisfaction. I am committed to continuous learning and applying innovative solutions to solve complex problems in web development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ulugbek Kobulov",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+49) 1515 733 88 40",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "contact@ulugbek-kobulov.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "German, English, Russian, Uzbek",
    },
  ],
};

// experience data

const experience = {
  icon: "public/next.svg",
  title: "My Experience",
  description:
    "I have a strong background in web development, with a focus on creating responsive and user-friendly front-end designs. My journey includes hands-on training in web applications and front-end technologies, where I have developed skills in optimizing user experience and interface design.",
  items: [
    {
      company: "Digital A-Team",
      position: "Frontend Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Die Zieglerschen - Diakonie Stetten",
      position: "Work Educator",
      duration: "2021-2023",
    },
    {
      company: "Die Zieglerschen - Diakonie Stetten",
      position: "FsJ - Volunteer Social Worker",
      duration: "2017-2018",
    },
    {
      company: "Autohaus Chevrolet and Daewoo",
      position: "Car Mechanic",
      duration: "2013-2017",
    },
  ],
};

// education data

const education = {
  icon: "public/next.svg",
  title: "My Education",
  description:
    "My educational background spans a variety of disciplines, each contributing unique skills and insights to my development as a web professional. I have undergone rigorous training in web development, with a specific focus on front-end technologies and web applications, complemented by my earlier studies in social work and mechanics. This diverse educational journey has equipped me with a broad perspective and versatile skills set, enabling me to tackle complex challenges in web development with a holistic approach.",
  items: [
    {
      institution: "Online Course Platform - Developer Akademie",
      degree: "Front-End Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Diakonisches Institut for Social Professions",
      degree: "Certified Social Worker",
      duration: "2018-2021",
    },
    {
      institution: "Technical and Design College",
      degree: "Certified Car Mechanic",
      duration: "2010-2013",
    },
  ],
};

// skills data

const skills = {
  title: "My Skills",
  description:
    "I have a strong foundation in front-end development, with a focus on creating responsive and user-friendly interfaces. My skills span a range of front-end technologies, enabling me to build efficient and scalable web applications that enhance user experience and engagement. I am proficient in the following technologies:",
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
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
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
                          {item.fieldValue}
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
