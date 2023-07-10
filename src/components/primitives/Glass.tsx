import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const glassVariants = cva(
  "absolute inset-0 pointer-events-none w-full from-white to-transparent z-10 h-full bg-transparent block",
  {
    variants: {
      direction: {
        ltr: "bg-gradient-to-r right-auto top-0 bottom-0 left-0 ml-0",
        rtl: "bg-gradient-to-l right-0 top-0 bottom-0 left-auto mr-0",
        btt: "bg-gradient-to-t bottom-0",
        ttb: "bg-gradient-to-b top-0",
      },
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        full: "max-w-full",
      }
    },
    defaultVariants: {
      direction: "rtl",
      size: "xs",
    },
  }
)

interface GlassProps extends VariantProps<typeof glassVariants> {};


export function Glass({ direction, size }: GlassProps) {
  return (
    <div className={cn(glassVariants({ direction, size }))} />
  );
};
