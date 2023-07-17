"use client";

import { List, X } from "@/assets/phosphor";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/primitives/Button";
import { useState } from "react";
import { MobileNavbarContainer } from "./MobileNavbarContainer";

interface MobileNavbarProps {};

export function MobileNavbar({}: MobileNavbarProps) {
  const [ isContainerOpen, setIsContainerOpen ] = useState(false);

  return (
    <header className="w-full z-20 sticky top-0 border-b border-gray-100 bg-white shadow-b lg:hidden">
      <nav className="wrapper h-16 flex items-center justify-between">
        <Logo className="hidden sm:flex" />
        <Logo className="sm:hidden" size="md" />

        { isContainerOpen && <MobileNavbarContainer />}


        <Button variant="outlineDim" size="icon" onClick={() => setIsContainerOpen(!isContainerOpen)}>
          { isContainerOpen ? <X size={16} /> : <List size={16} /> }
        </Button>
      </nav>
    </header>
  );
};
