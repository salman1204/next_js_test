import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Navbar.module.css'
import { FiPhoneCall, FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className={styles.top__bar}>
      <Container>
        <Row>
          <Col lg={8} md={4} className="text-muted d-flex align-items-center">
             <a href="tel:+8801521109830" className="text-decoration-none text-muted d-none d-md-block mx-2 "> <FiPhoneCall/> (+88) 018-18058362</a> 
          </Col>
          <Col lg={4} md={8} className="d-flex justify-content-end">
            <Link href="/">
              <a className="text-decoration-none text-muted mx-2 d-flex align-items-center"><FiHeart/> <span className="mx-1">Wish List</span> </a>
            </Link>
            <Link href="/">
              <a className="text-decoration-none text-muted mx-2 d-flex align-items-center"><FiUser/> <span className="mx-1">Login</span> </a>
            </Link>
            <Link href="/">
                <a className="text-decoration-none bg-dark text-white mx-2 p-2"><FiShoppingCart/> <span className="mx-1">My Cart</span> </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Navbar
