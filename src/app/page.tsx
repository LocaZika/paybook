
import { Header } from "@/components";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const getCookie = cookies().get('user');
  if(!getCookie){
    return redirect('/login');
  }
  return (
    <>
      <Header />
      <main>
        
      </main>
    </>
  );
}
