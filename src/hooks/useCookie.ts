import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function useCookie<T>(key: string): T | undefined {
  const [cookie, setCookie] = useState<T>();
  const cookies = new Cookies();
  const cookieData = cookies.get(key);
  useEffect(() => {
    setCookie(cookieData);
  }, []);
  return cookie;
}