import { Metadata } from 'next';
import loginStyle from './login.module.scss';
import handleLogin from '@/actions/login.action';

export const metadata: Metadata = {
  title: "Login"
}
export default function login() {
  return (
    <div className={loginStyle['login-container']}>
      <form className={`${loginStyle['login-form']} glassify`} action={handleLogin}>
        <p>login</p>
        <div className={loginStyle['username']}>
          <input
            name='username'
            className={loginStyle['login-inp']}
            type="text"
            placeholder='Username'
          />
        </div>
        <div className={loginStyle['password']}>
          <input
            name='password'
            className={loginStyle['login-inp']}
            type="Password"
            placeholder='Password'
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}
