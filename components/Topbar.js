import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FiHeart, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi'
import styles from '../styles/Topbar.module.css'

const Topbar = () => {
  return (
    <div className={styles.top__bar}>
      <Container fluid="lg">
        <Row>
          <Col
            lg={3}
            md={3}
            sm={2}
            xs ={3}
            className="text-muted d-flex align-items-center"
          >
            <Link href="/">
              
                <Image
                  src="/images/Logo/logo.png"
                  alt="company logo"
                  width={130}
                  height={67}
                />
  
            </Link>
          </Col>
          <Col lg={6} md={5} sm={6} xs={6} className="d-flex align-items-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search anything..."
              />
              <div className="input-group-append d-none d-md-block">
                <button className="btn btn-outline-secondary ms-1" type="button">
                  <FiSearch/>
                </button>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={3} xs={3} className="d-flex justify-content-end pe-0">
            <Link href="/wishList">
              <span className="text-decoration-none text-muted mx-2 d-flex align-items-center">
                <FiHeart />{' '}
                <span className="d-none d-md-block mx-md-1">Wish List</span>
              </span>
            </Link>
            <Link href="/">
              <span className="text-decoration-none text-muted mx-2 d-flex align-items-center">
                <FiUser /> <span className="d-none d-md-block mx-1">Login</span>
              </span>
            </Link>
            <Link href="cart">
              <span className="text-decoration-none d-flex align-items-center bg-dark text-white p-2">
                <FiShoppingCart className="d-none d-sm-block "/>
                <span className="mx-1">Cart(0)</span>
              </span>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Topbar
