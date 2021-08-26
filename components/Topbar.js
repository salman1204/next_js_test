import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiHeart, FiPhoneCall, FiShoppingCart, FiUser } from 'react-icons/fi'
import { CSSTransition } from 'react-transition-group'
import styles from '../styles/Topbar.module.css'
import CartSidePanel from './CartSidePanel'

const Topbar = () => {
  const [openPanel, setOpenPanel] = useState(false)

  const openPanelHandler = (event) => {
    setOpenPanel(event)
  }

  return (
    <div className={styles.top__bar}>
      <>
        <CSSTransition
          in={openPanel}
          timeout={450}
          classNames="panel-container-right"
          unmountOnExit
        >  
          <CartSidePanel openPanelHandler={openPanelHandler} />
        </CSSTransition>
      </>
      <Container fluid="lg">
        <Row>
          <Col lg={8} md={4} sm={5} className="text-muted d-flex align-items-center">
            <a
              href="tel:+8801521109830"
              className="text-decoration-none text-muted d-none d-sm-block mx-2 "
            >
              <FiPhoneCall /> (+88) 018-18058362
            </a>
          </Col>
          <Col lg={4} md={8} sm={7} className="d-flex justify-content-end pe-0">
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
            <a
              className="text-decoration-none bg-dark text-white p-2"
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenPanel(true)}
            >
              <FiShoppingCart /> <span className="mx-1">My Cart</span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Topbar