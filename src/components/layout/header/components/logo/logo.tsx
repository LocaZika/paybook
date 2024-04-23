import Image from 'next/image';
import logoImg from '@public/imgs/paybook-logo2.png';
import logoStyle from './logo.module.scss';
export default function logo() {
  return (
    <div className={logoStyle['logo']}>
      <Image src={logoImg} alt='logo-img' />
    </div>
  )
}
