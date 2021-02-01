import Link from 'next/Link';
import Image from 'next/Image'

const NavBar = () => {
  return(
    <nav>
      <div className="logo"> 
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninja"><a>Ninja Listing</a></Link>
    </nav>
  );
}


export default NavBar;