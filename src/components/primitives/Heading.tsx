import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

const headingVariants = cva(
  "tracking-tight",
  {
    variants: {
      variant: {
        h1: "text-5xl lg:text-6xl lg:leading-tight",
        h2: "text-3xl lg:text-4xl lg:leading-tight",
        h3: "text-2xl",
        span: "",
      },
      accentColor: {
        gray: "text-gray-800",
        "gray-dim": "text-gray-600",
        brand: "text-amber-700",
        "brand-dark": "text-amber-800",
      },
      fontWeight: {
        medium: "font-medium",
        bold: "font-bold",
        extrabold: "font-extrabold",
      }
    },
    defaultVariants: {
      variant: "span",
      accentColor: "gray",
      fontWeight: "bold",
    },
  }
)

interface HeadingProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof headingVariants> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'span';
};

export function Heading({ variant, accentColor, fontWeight, className, as: Component='h2', ...props}: HeadingProps) {

  return (
    <Component className={cn(headingVariants({ variant: Component, accentColor, fontWeight, className }))} {...props} />
  );
};
