import { navbar } from "@/helpers/navbar";
import { Logo } from "../brand/Logo";
import { Button } from "./Button";
import { NavbarItem } from "./NavbarItem";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <div className="w-full z-20 sticky top-0 border-b border-gray-100 bg-white shadow-b">
      <nav className="wrapper h-16 flex items-center justify-between">
        <Logo />

        <div className="flex gap-4 h-full">
          { navbar.map(({href, title, isScrollSection}, i) => (
            // TODO: Add scroll section functionality
            <NavbarItem key={i} href={href} isActive={i===0}>
              {title}
            </NavbarItem>
          ))}
        </div>

        <Button variant="outline">AGENDAR CONSULTA</Button>
      </nav>
    </div>
  );
};
