"use client";

import { navbar } from "@/helpers/navbar";
import { useScrollSection } from "react-scroll-section";
import { Logo } from "../brand/Logo";
import { Button } from "./Button";
import { ISectionData, NavbarItem } from "./NavbarItem";


interface NavbarProps {};

export function Navbar({}: NavbarProps) {

  const sections = {
    hero: useScrollSection("hero"),
    statistics: useScrollSection("statistics"),
    features: useScrollSection("features"),
    greet: useScrollSection("greet"),
    contact: useScrollSection("contact"),
    cta: useScrollSection("cta"),
  }

  return (
    <div className="w-full z-20 sticky top-0 border-b border-gray-100 bg-white shadow-b">
      <nav className="wrapper h-16 flex items-center justify-between">
        <Logo />

        <div className="flex gap-4 h-full">
          { navbar.map(({ title, id }, i) => (
            <NavbarItem key={i} sectionData={sections[id] as unknown as ISectionData}>
              {title}
            </NavbarItem>
          ))}
        </div>

        <Button variant="outline">AGENDAR CONSULTA</Button>
      </nav>
    </div>
  );
};
