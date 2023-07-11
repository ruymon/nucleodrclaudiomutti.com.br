import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export interface ISectionData {
  onClick: () => void;
  selected: boolean;
}

interface NavbarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sectionData: ISectionData;
};

export function NavbarItem({ className, sectionData, ...props }: NavbarItemProps) {
  return (
    <button type="button" className={cn(
      "relative w-fit px-3 font-medium text-center flex items-center justify-center transition-colors",
      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:content-[''] after:w-full after:h-0.5 after:rounded-t-md",
      sectionData.selected ? "after:bg-amber-700 text-amber-700 font-medium" : "after:bg-transparent text-gray-600 hover:text-gray-700",
      className
     )} {...props} onClick={sectionData.onClick} />
  );
};
