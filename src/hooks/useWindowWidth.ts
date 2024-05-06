import { useEffect, useState } from "react";

function getWindowWidth(): number{
  const { innerWidth } = window;
  return innerWidth;
}

export default function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());
  useEffect(() => {
    function handleResize(){
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

