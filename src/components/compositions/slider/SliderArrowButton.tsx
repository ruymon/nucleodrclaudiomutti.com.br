import { CaretLeft, CaretRight } from "@/assets/phosphor";
import { Button } from "@/components/primitives/Button";
import { ButtonHTMLAttributes } from "react";

type CaretVariants = 'left' | 'right';

interface SliderArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: CaretVariants;
};

interface CaretProps {
  variant: CaretVariants;
};

const Caret = ({ variant }: CaretProps) => {
  return variant === 'left' ? <CaretLeft className="xl:w-7 xl:h-7 w-4" /> : <CaretRight className="xl:w-7 xl:h-7 w-4" />
}

export function SliderArrowButton({ variant, ...props }: SliderArrowButtonProps) {
  return (
    <Button size="icon" className="xl:pointer-events-auto xl:-ml-6" {...props}>
      <Caret variant={variant} />
    </Button>
  )
}