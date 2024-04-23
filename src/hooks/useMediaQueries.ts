import { useEffect, useState } from "react";

export default function useMediaQueries(): number {
  const [mediaQueries, setMediaQueries] = useState(0);
  const handleMediaQueries = () => {
    if (typeof window){
      setMediaQueries(window.innerWidth);
    }
  }
  useEffect(() => {
    handleMediaQueries();
  }, [])
  return mediaQueries;
}
