"use client";

import { ArrowLineUp } from "@/assets/phosphor";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Button } from "../primitives/Button";

interface ScrollToTopButtonProps {};

export function ScrollToTopButton({}: ScrollToTopButtonProps) {
  const scrollTopTop = useScrollToTop();

  return (
    <Button onClick={scrollTopTop} variant="outlineGhost" size="icon">
      <ArrowLineUp size={28} />
    </Button>
  );
};
