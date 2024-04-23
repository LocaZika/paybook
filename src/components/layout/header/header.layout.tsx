'use client'
import headerStyle from '@components/layout/header/header.module.scss';
import { Logo } from './components';
import { Loading, User } from '@components/index';
import { Col, Container, Row } from 'react-bootstrap';
import { useCookie, useMediaQueries } from '@/hooks';
import { Suspense } from 'react';

export default function HeaderLayout(){
  const userData = useCookie<TUserData>('user');
  const mediaQuery: number = useMediaQueries();
  
  return (
    <header className={`${headerStyle['header-container']}`}>
      <Container fluid>
        <Row className='align-items-center'>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Logo />
          </Col>
          <Col sm={0} md={{span: 4, offset: 6}} lg={{span: 2, offset: 8}}
            style={mediaQuery < 576 ? {display: 'none'} : {}}
          >
            <Suspense fallback={<Loading/>}>
              <User username={userData?.username} />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
