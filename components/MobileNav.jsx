"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import * as React from "react";

const links = [
    {
        name: "Startseite",
        path: "/",
    },
/*     {
        name: "Dienstleistungen",
        path: "/services",
    }, */
    {
        name: "Lebenslauf",
        path: "/resume",
    },
    {
        name: "Projekte",
        path: "/work",
    },
    {
        name: "Kontakt",
        path: "/contact",
    },
];

export const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={() => setIsOpen(false)} >
                        <h1 className="text-4xl font-semibold">
                            Ulugbek<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                            } text-xl capitalize hover:text-accent transition-all`} onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;