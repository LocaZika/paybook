'use server'
import { decode } from "@/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IRawFormData {
  username: FormDataEntryValue;
  password: FormDataEntryValue;
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
  const userData = await fetch('http://localhost:2207/login', {
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
    console.log(userData);
    
    // default maxAge: 3600
    cookie.set('user', JSON.stringify(userData), { maxAge: 99999, secure: true, });
    redirect('/');
  }
}