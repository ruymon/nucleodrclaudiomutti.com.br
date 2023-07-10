import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { Button, IButtonSizes, IButtonVariants, } from "./Button";

interface SocialMediaIconButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  icon: ReactNode;
  variant?: IButtonVariants;
  size?: IButtonSizes;
};

export function SocialMediaIconButton({icon, variant, size = 'icon', href, ...props}: SocialMediaIconButtonProps) {
  return (
    <Link href={href} {...props}>
      <Button size={size} variant={variant}>
        { icon }
      </Button>
    </Link>
  );
};
