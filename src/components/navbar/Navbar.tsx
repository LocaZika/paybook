import navbarStyle from './navbar.module.scss';

export default async function Navbar() {
  const getUsers = await fetch(`${process.env.NEXT_PUBLIC_HOST}/users`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  const users = await getUsers.json();
  return (
    <div>Navbar</div>
  )
}
