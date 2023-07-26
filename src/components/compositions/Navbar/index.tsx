"use client";

import { Logo } from "@/components/brand/Logo";
import { navbar } from "@/helpers/navbar";
import { useNavigationContext } from "@/hooks/useNavigationContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { ScheduleAppointmentButton } from "../ScheduleAppointmentButton";
import { NavbarItem } from "./NavbarItem";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  const { handleScroll }= useSmoothScroll();
  const activePath = useNavigationContext((state) => state.activePath);
  console.log(activePath);
  

  return (
    <header className="w-full z-20 sticky top-0 border-b border-gray-100 bg-white shadow-b hidden lg:flex">
      <nav className="wrapper h-16 flex items-center justify-between">
        <Logo className="flex" />

        <div className="gap-4 h-full flex">
          {navbar.map(({ title, id, ...props }) => (
            <NavbarItem
              key={id}
              onClick={handleScroll}
              isActive={activePath === id}
              {...props}
            >
              {title}
            </NavbarItem>
          ))}
        </div>

        <ScheduleAppointmentButton variant="outline" className="flex">AGENDAR CONSULTA</ScheduleAppointmentButton>
      </nav>
    </header>
  );
};
