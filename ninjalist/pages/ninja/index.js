import Head from 'next/head';
import Link from 'next/Link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { ninjas: data }
  }
}  


const Ninja = ({ ninjas }) => {
  return ( 
    <>
       <Head>
        <title>Ninjas | All ninjas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>All ninjas!</h1>
        {ninjas.map(ninja => (
          <Link href={`/ninja/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
        
      </div>
    </>
   );
}
 
export default Ninja;