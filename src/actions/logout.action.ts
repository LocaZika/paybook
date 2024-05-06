'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function handleLogout(): Promise<void> {
  const cookie = cookies();
  cookie.delete('user');
  redirect('/login');
}