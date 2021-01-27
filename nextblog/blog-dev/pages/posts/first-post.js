import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout'






const Firstpost = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  );
}



export default Firstpost;