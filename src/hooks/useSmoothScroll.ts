function handleScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  const href = event.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");

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

export function useSmoothScroll() {
  return { handleScroll } as const;
}
