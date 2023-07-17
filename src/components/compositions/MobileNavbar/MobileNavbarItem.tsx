import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

interface MobileNavbarItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  isExternal?: boolean;
  isActive?: boolean;
};

export function MobileNavbarItem({ className, isExternal, isActive, ...props }: MobileNavbarItemProps) {
  return (
    <Link
      className={cn("relative py-1 w-full font-medium text-center flex items-center transition-colors",
        "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:w-0.5 before:h-full",
        isActive ? "pl-3 before:bg-amber-600 bg-amber-700/5 text-amber-700 font-medium" : "before:bg-transparent text-gray-600 hover:text-gray-700",)}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
};
