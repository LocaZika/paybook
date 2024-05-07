'use server'
import { decode } from "@/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IRawFormData {
  username: string;
  password: string;
}
interface IResponseData {
  ok: boolean;
  token: string;
}

export default async function handleLogin(formData: FormData): Promise<void> {
  const userInfo: IRawFormData = {
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  }
  const userData = await fetch(`${process.env.HOST}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo),
  });
  const data: IResponseData = await userData.json();
  if(data.ok == true) {
    const cookie = cookies();
    const userData = decode(data.token);
    // default maxAge: 3600
    cookie.set('user', JSON.stringify(userData), { maxAge: 99999, secure: true, });
    redirect('/');
  }
}