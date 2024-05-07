import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import appStyle from './app.module.scss';
import { ExpenseModal, Info } from "@/components";
import { Placeholder } from "react-bootstrap";

export default async function Home() {
  const getCookie = cookies().get('user');
  if(!getCookie){
    return redirect('/login');
  }
  const getUsers = await fetch(`${process.env.HOST}/users`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  const users = await getUsers.json();
  return (
    <>
      {
        users?
        <ExpenseModal users={users}/>:
        <Placeholder.Button variant="primary" xs={6} />
      }
      <div className={appStyle['dashbroad']}>
        {
          users?.map((user: TUserData) => (
            <Info key={user._id} user={user} />
          ))
        }
      </div>
    </>
  );
}
