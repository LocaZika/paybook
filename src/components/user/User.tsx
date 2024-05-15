'use client'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userStyle from "./user.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleLogout } from "@/actions";

interface IUser{
  username: string | undefined;
}
export default function User({username}: IUser) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const toggleShow = (): void => {
    setIsShow(!isShow);
  }
  const logout = async (): Promise<void> => {
    await handleLogout();
  }
  return (
    <div className={
      !isShow ?
      `${userStyle['user-container']} glassify` :
      `${userStyle['user-container']} ${userStyle['show']} glassify`}
      onClick={toggleShow}
    >
      <div className={userStyle['user-name']}>
        <p>{username}</p>
      </div>
      <div className={userStyle['user-icon']}>
        <FontAwesomeIcon icon={faUser} size={'2x'} />
      </div>
      <div className={userStyle['user-menu']} onClick={logout}>
        logout
      </div>
    </div>
  )
}
