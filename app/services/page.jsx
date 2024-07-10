"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const services = [
  {
    num: "01",
    title: "Web-/Front-End-Entwicklung",
    description: "Entwicklung von benutzerfreundlichen Websites, die sowohl ästhetisch ansprechend als auch funktional sind, um Ihr Online-Marketing zu stärken.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Freiberufliche Webentwicklung",
    description: "Individuelle Webentwicklung, angepasst an Ihre geschäftlichen Bedürfnisse, um Ihr digitales Potenzial voll auszuschöpfen.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Responsive Webdesign",
    description: "Gestaltung von Websites, die auf jeder Bildschirmgröße perfekt funktionieren, um eine optimale Benutzererfahrung zu gewährleisten.",
    href: "/contact",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description: "Konzeption und Design intuitiver Benutzeroberflächen, die die Nutzerinteraktion und -zufriedenheit verbessern.",
    href: "/contact",
  },
];

import { motion } from "framer-motion";

export const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
            /*   delay: 2.4, */
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={service.href}
                          className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                        >
                          <BsArrowDownRight className="text-primary text-3xl" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        Nehmen Sie jetzt Kontakt mit mir auf.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                {/* service title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
