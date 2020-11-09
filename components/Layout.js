import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <>
    <Head>
      <title>BitsPrice</title>
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cyborg/bootstrap.min.css'
        integrity='sha384-nEnU7Ae+3lD52AK+RGNzgieBWMnEfgTbRHIwEvp1XXPdqdO6uLTd/NwXbzboqjc2'
        crossorigin='anonymous'
      ></link>
    </Head>
    <Navbar />
    <div className='container'>{props.children}</div>
  </>
);

export default Layout;
