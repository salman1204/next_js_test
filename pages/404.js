import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'

const Custom404 = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <section className="pt-5">
      <Container>
        <Row>
          <div className="col-sm-12 text-center d-flex justify-content-center">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="page__not__found__bg">
                <h1 className="text-center display-1">404</h1>
              </div>
              <div>
                <h3 className="h2">Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <Link href="/">
                  <a className="link__404 d-inline-block text-white mt-3 px-3 py-3">
                    Go to Home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Custom404
