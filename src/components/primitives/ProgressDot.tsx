import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const progressDotVariants = cva(
  "w-2 h-2 rounded-full transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-gray-200 hover:bg-gray-300",
        active: "bg-gray-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ProgressDotProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof progressDotVariants> {};

export function ProgressDot({ variant, className, ...props }: ProgressDotProps) {
  return <button className={cn(progressDotVariants({ variant, className }))} { ...props }/>
};
