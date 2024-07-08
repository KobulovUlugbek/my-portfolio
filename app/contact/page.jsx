"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefon",
    description: "(+49) 1515 733 88 40",
  },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "contact@ulugbek-kobulov.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adresse",
    description: "Friedrichshafen, Deutschland",
  },
];

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action="https://ulugbek-kobulov.com/send_mail.php"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Lass uns zusammenarbeiten</h3>
              <p className="text-white/60">
              Ich freue mich auf deine Nachricht! Ob du Fragen zu meinen Diensten hast, an einer Zusammenarbeit interessiert bist oder einfach Hallo sagen möchtest – zögere nicht, mich zu kontaktieren.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="firstname" placeholder="Vorname" />
                <Input type="lastname" name="lastname" placeholder="Nachname" />
                <Input type="email" name="email" placeholder="E-Mail Adresse" />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wähle einen Service aus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup label="Services">
                    <SelectLabel>Wähle einen Service aus</SelectLabel>
                    <SelectItem value="Web-/Front-End-Entwicklung">Web-/Front-End-Entwicklung</SelectItem>
                    <SelectItem value="Freiberuflich">Freiberuflich</SelectItem>
                  </SelectGroup>

                  {/* <SelectGroup label="Services">
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Mobile Development</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup> */}

                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                placeholder="Nachricht"
                className="h-[200px]"
              />
              {/* btn */}
              <Button size="md" className="max-w-40 h-[48px]">
                Nachricht senden
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
