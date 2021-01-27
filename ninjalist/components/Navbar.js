import Link from 'next/Link';

const NavBar = () => {
  return(
    <nav>
      <div className="logo"> 
        <h1>Nija List</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninja"><a>Ninja Listing</a></Link>
    </nav>
  );
}


export default NavBar;