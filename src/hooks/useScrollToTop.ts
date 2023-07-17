import { useWindowScroll } from "@mantine/hooks";

export function useScrollToTop() {
  const [scroll, scrollToPosition ] = useWindowScroll();
  return () => scrollToPosition({ y: 0 });
}