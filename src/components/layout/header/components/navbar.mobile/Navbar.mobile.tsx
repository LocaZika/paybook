import { Offcanvas } from 'react-bootstrap';
import navbarMobileStyle from './navbar.mobile.module.scss';
import Link from 'next/link';
import { handleLogout } from '@/actions';

interface INavbarMobileProps{
  show: boolean;
  onClose: () => void;
}

export default function NavbarMobile({ show, onClose }: INavbarMobileProps) {
  const logout = async(): Promise<void> => {
    await handleLogout();
  }
  return (
    <Offcanvas show={show} onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className={navbarMobileStyle['navbar-mobile']}>
          <li><div onClick={logout}>logout</div></li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
