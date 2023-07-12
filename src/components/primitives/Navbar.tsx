import { navbar } from "@/helpers/navbar";
import { Logo } from "../brand/Logo";
import { Button } from "./Button";
import { NavbarItem } from "./NavbarItem";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <header className="w-full z-20 sticky top-0 border-b border-gray-100 bg-white shadow-b">
      <nav className="wrapper h-16 flex items-center justify-between">
        <Logo />

        <div className="flex gap-4 h-full">
          { navbar.map(({ title, id }, i) => (
            <NavbarItem key={i}>
              {title}
            </NavbarItem>
          ))}
        </div>

        <Button variant="outline">AGENDAR CONSULTA</Button>
      </nav>
    </header>
  );
};
