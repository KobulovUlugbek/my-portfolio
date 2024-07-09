"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="flex justify-center space-x-4 p-4">
        {/* Impressum Modal */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              Impressum
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <Dialog.Content className="relative bg-primary p-6 rounded-lg w-[500px] h-[500px] xl:w-[650px] xl:h-[650px] overflow-auto">
                <Dialog.Title className="text-lg font-bold text-accent/85">
                  Impressum
                </Dialog.Title>
                <ScrollArea className="h-[400px]">
                  <div className="mt-2 text-sm text-white/60 overflow-auto max-h-[90%] scrollbar-accent">
                    Here is the legal information... (repeat as needed) 
                  </div>
                </ScrollArea>
                <Dialog.Close asChild>
                  <button className="absolute top-0 right-0 m-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Close</span>
                    &#x2715; {/* Cross symbol */}
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>

        {/* Datenschutz Modal */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              Datenschutz
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <Dialog.Content className="relative bg-primary p-6 rounded-lg w-[500px] h-[500px] xl:w-[650px] xl:h-[650px] overflow-auto">
                <Dialog.Title className="text-lg font-bold text-accent/85">
                  Datenschutz
                </Dialog.Title>
                <ScrollArea className="h-[400px]">
                  <div className="mt-2 text-sm text-white/60 overflow-auto max-h-[90%] scrollbar-accent">
                    Here is the legal information... (repeat as needed) 
                  </div>
                </ScrollArea>
                <Dialog.Close asChild>
                  <button className="absolute top-0 right-0 m-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Close</span>
                    &#x2715; {/* Cross symbol */}
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </motion.div>
  );
};

export default Footer;
