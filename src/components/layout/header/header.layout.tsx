'use client'
import headerStyle from '@components/layout/header/header.module.scss';
import { Logo, NavbarMobile } from './components';
import { Loading, User } from '@components/index';
import { Col, Container, Row } from 'react-bootstrap';
import { useCookie, useWindowWidth } from '@/hooks';
import { Suspense, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function HeaderLayout(){
  const [show, setShow] = useState<boolean>(false);
  const userData = useCookie<TUserData>('user');
  const mediaQuery: number = useWindowWidth();
  const handleOpen = (): void => setShow(true);
  const handleClose = (): void => setShow(false);
  return (
    <header className={`${headerStyle['header-container']}`}>
      <Container fluid>
        <Row className='align-items-center'>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Logo />
          </Col>
          <Col
            className={headerStyle['menu-right']}
            xs={{span: 2, offset: 8}}
            sm={{span: 2, offset: 8}}
            md={{span: 4, offset: 6}}
            lg={{span: 2, offset: 8}}
          >
            <Suspense fallback={<Loading/>}>
              {
                mediaQuery <= 430 ?
                <>
                  <button
                    type='button'
                    className={`${headerStyle['menu-right__btn']} glassify`}
                    onClick={handleOpen}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                  <NavbarMobile show={show} onClose={handleClose}/>
                </>:
                <User username={userData?.displayName} />
              }
            </Suspense>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
