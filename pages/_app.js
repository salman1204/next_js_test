import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import { wrapper } from '../redux/store'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(MyApp)
