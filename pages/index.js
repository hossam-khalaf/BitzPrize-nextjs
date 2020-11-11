import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <>
      <h1 className='my-5'>Welcome to BitcoinPrice</h1>
      <p className='badge badge-primary p-2 '>Check current Bitcoin rates</p>
      <Prices bpi={props.bpi} />
    </>
  </Layout>
);

Index.getInitialProps = async function () {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  const res = await fetch(url);
  const data = await res.json();

  // console.log(data);
  return {
    bpi: data.bpi,
  };
};
Index.getInitialProps();

export default Index;
