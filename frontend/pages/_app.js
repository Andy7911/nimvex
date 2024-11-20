import Layout from '../components/layout';
import { LoaderProvider } from '../components/templates/LoaderProvider';
function MyApp({ Component, pageProps }) {
  return (
  
    <Layout>
      <Component {...pageProps} />
    </Layout>

  );
}

export default MyApp;