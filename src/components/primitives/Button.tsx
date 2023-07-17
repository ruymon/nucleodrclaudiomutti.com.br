import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

const buttonVariants = cva(
  "uppercase flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-amber-700 text-gray-100 hover:bg-amber-800 focus-visible:ring-amber-700/30",
        destructive: "bg-red-700 text-gray-100 hover:bg-red-800 focus-visible:ring-red-700/30",
        outline: "border border-gray-400 text-gray-600 bg-inherit hover:bg-gray-800 hover:border-gray-800 hover:text-gray-100 focus-visible:ring-gray-200",
        outlineWhite: "border border-gray-100 text-gray-100 bg-transparent hover:bg-amber-800  hover:border-amber-800 focus-visible:ring-amber-800/30",
        outlineDim: "border border-gray-300 text-gray-400 bg-inherit hover:bg-gray-800 hover:border-gray-800 hover:text-gray-100 focus-visible:ring-gray-200",
        outlineGhost: "border bg-gray-700/50 border-gray-600 text-gray-600 hover:text-gray-300 hover:bg-gray-600 focus-visible:ring-gray-200",
      },
      size: {
        default: "px-4 py-2 gap-2",
        sm: "px-3 py-1 text-xs gap-2",
        lg: "px-8 py-4 gap-2",
        icon: "p-2",
        "small-icon": "p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
export type IButtonVariants = VariantProps<typeof buttonVariants>["variant"];
export type IButtonSizes = VariantProps<typeof buttonVariants>["size"];