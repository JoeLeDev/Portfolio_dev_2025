/** Scroll vers une section par id ; respecte scroll-mt-* via scrollIntoView. */
export function scrollToSection(sectionId: string): boolean {
  const element = document.getElementById(sectionId);
  if (!element) {
    return false;
  }

  element.scrollIntoView({ block: "start", inline: "nearest" });
  return true;
}
