import React from 'react'
import Nav from './Nav'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='loding-header nav-abs custom-scroll'>
      <Container>
        <Row>
          <Col>
            <nav>
              <Logo className="mr-auto logo center d-flex">
                <span className="logo-text">Mapstore - Tìm là thấy</span>
              </Logo>
              <Nav />
            </nav>
          </Col>
        </Row>
      </Container>      
    </header>
  )
}

export default Header;