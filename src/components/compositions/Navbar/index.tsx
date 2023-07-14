import { Logo } from "@/components/brand/Logo";
import { Symbol } from "@/components/brand/Symbol";
import { Button } from "@/components/primitives/Button";
import { navbar } from "@/helpers/navbar";
import { NavbarItem } from "./NavbarItem";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <header className="w-full z-20 sticky top-0 border-b border-gray-100 bg-white shadow-b">
      <nav className="wrapper h-16 flex items-center justify-between">
        <Logo className="hidden sm:flex" />
        <Symbol className="flex sm:hidden" />

        <div className="gap-4 h-full hidden lg:flex">
          { navbar.map(({ title, id }, i) => (
            // TODO: Why is this ID needed?
            <NavbarItem key={i}>
              {title}
            </NavbarItem>
          ))}
        </div>

        <Button variant="outline" className="hidden sm:flex">AGENDAR CONSULTA</Button>
      </nav>
    </header>
  );
};
