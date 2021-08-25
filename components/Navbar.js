import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiHeart, FiPhoneCall, FiUser } from 'react-icons/fi'
import styles from '../styles/Navbar.module.css'
import CartSidePanel from './CartSidePanel'

const Navbar = () => {
  const [openPanel, setOpenPanel] = useState(false)

  const openPanelHandler = (e) => {
    setOpenPanel(e)
  }

  return (
    <div className={styles.top__bar}>
      <Container>
        <Row>
          <Col lg={8} md={4} className="text-muted d-flex align-items-center">
            <a
              href="tel:+8801521109830"
              className="text-decoration-none text-muted d-none d-md-block mx-2 "
            >
              <FiPhoneCall /> (+88) 018-18058362
            </a>
          </Col>
          <Col lg={4} md={8} className="d-flex justify-content-end">
            <Link href="/wishList">
              <a className="text-decoration-none text-muted mx-2 d-flex align-items-center">
                <FiHeart /> <span className="mx-1">Wish List</span>
              </a>
            </Link>
            <Link href="/">
              <a className="text-decoration-none text-muted mx-2 d-flex align-items-center">
                <FiUser /> <span className="mx-1">Login</span>
              </a>
            </Link>
            <Link href="">
              <a
                className="text-decoration-none bg-dark text-white mx-2 p-2"
                onClick={() => setOpenPanel(true)}
              >
                <span className="mx-1">My Cart</span>
              </a>
            </Link>
          </Col>
        </Row>
        <Row>
          {openPanel && <CartSidePanel openPanelHandler={openPanelHandler} />}
        </Row>
      </Container>
    </div>
  )
}

export default Navbar
