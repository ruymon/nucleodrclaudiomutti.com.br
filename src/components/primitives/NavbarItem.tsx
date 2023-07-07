import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes } from "react";

interface NavbarItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  isActive?: boolean;
};

export function NavbarItem({ className, isActive, ...props }: NavbarItemProps) {
  return (
    <Link className={cn(
      "relative w-fit px-3 font-medium text-center flex items-center justify-center transition-colors",
      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:content-[''] after:w-full after:h-0.5 after:rounded-t-md",
      isActive ? "after:bg-amber-700 text-amber-700 font-medium" : "after:bg-transparent text-gray-600 hover:text-gray-700",
      className
     )} {...props} />
  );
};
