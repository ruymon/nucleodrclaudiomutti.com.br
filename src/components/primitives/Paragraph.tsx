import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

const paragraphVariants = cva(
  "tracking-tight",
  {
    variants: {
      variant: {
        default: "lg:leading-relaxed",
        hat: "font-bold capitalize none"
      },
      size: {
        default: "text-base",
        small: "text-sm",
        large: "text-lg",
        "extra-large": "text-xl",
      },
      accentColor: {
        gray: "text-gray-600",
        "gray-light": "text-gray-500",
        
        "brand-light": "text-amber-700/75",
        brand: "text-amber-700",
        "brand-dark": "text-amber-800",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      accentColor: "gray",
    },
  }
)

interface ParagraphProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof paragraphVariants> {
  children: ReactNode;
};

export function Paragraph({ variant, accentColor, size, className, ...props }: ParagraphProps) {
  return <span className={cn(paragraphVariants({ variant, accentColor, size, className }))} {...props} />;
};
