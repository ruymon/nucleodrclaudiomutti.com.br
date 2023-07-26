import { type NavigationPath } from "@/@types/navbar";
import { useNavigationContext } from "./useNavigationContext";



export function useSmoothScroll() {
  const setActivePath = useNavigationContext((state) => state.setActivePath);

  function handleScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, "") as NavigationPath;
    setActivePath(targetId);
  
    if (targetId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
  
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return { handleScroll } as const;
}
