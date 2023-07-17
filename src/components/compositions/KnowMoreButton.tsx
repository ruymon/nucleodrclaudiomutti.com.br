"use client";

import { CaretDoubleDown } from "@/assets/phosphor";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";

export function KnowMoreButton() {
  const { handleScroll } = useSmoothScroll();

  return (
    <Link 
      href="#specialties" 
      onClick={handleScroll}
      className="sm:h-full sm:w-fit sm:px-4 text-amber-700 hover:text-amber-800 focus-visible:ring-amber-700/30 uppercase flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 gap-1"
    >
      Saiba mais
      <CaretDoubleDown size={14} />
    </Link>
  );
};
