import Head from 'next/head'
import Link from 'next/Link'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
   <div>
     <NavBar />
     <h1>Homepage</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, libero amet alias nesciunt porro omnis in nemo doloremque! Unde vitae quidem commodi veniam laudantium nemo recusandae non similique deserunt nobis?</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, libero amet alias nesciunt porro omnis in nemo doloremque! Unde vitae quidem commodi veniam laudantium nemo recusandae non similique deserunt nobis?</p>

      <Link href="/ninja">
        <a>See ninja listing</a>
      </Link>
     <Footer />
   </div>
  )
}
