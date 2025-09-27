import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQueryList = window.matchMedia(query);
      const updateMatch = () => setMatches(mediaQueryList.matches);
      updateMatch();
      mediaQueryList.addEventListener("change", updateMatch);
      return () => mediaQueryList.removeEventListener("change", updateMatch);
    }
  }, [query]);

  // Return false during SSR to prevent hydration mismatch
  if (!mounted) {
    return false;
  }

  return matches;
}

export default useMediaQuery;




