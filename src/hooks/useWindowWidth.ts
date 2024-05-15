'use client'
import { useEffect, useState } from "react";

function getWindowWidth(){
  const { innerWidth } = window;
  return innerWidth;
}

export default function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState<number>(1920);
  useEffect(() => {
    function handleResize(){
      setWindowWidth(getWindowWidth());
    }
    if( typeof window !== "undefined" ){
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if( typeof window !== "undefined" ){
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return windowWidth;
}