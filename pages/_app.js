import NavBar from '../components/NavBar';
import Layout from './Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <span>Hello</span>
    </Layout>
  );
}
