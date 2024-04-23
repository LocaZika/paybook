'use server'
import { redirect } from "next/navigation";
import Cookies from "universal-cookie";

export default async function handleLogout(): Promise<void> {
  const cookieStore = new Cookies;
  cookieStore.remove('user');
  redirect('/login');
}