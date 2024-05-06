import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import appStyle from './app.module.scss';
import { Info } from "@/components";

export default async function Home() {
  const getCookie = cookies().get('user');
  if(!getCookie){
    return redirect('/login');
  }
  const users = await fetch('/users', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  return (
    <div className={appStyle['app']}>
      {/* <Info /> */}
    </div>
  );
}
