import Link from "next/link";
import {Nav, Image} from "./NavBar.styled"

const NavBar: React.FC = () => {
  
  return (
    <Nav>
      <Link href="/">
        <a>
          {/* @TODO Use local source files */}
          {/* <img src="../images/Dubsado-Logo.png" alt="logo" /> */}
          <Image src="https://uploads-ssl.webflow.com/62c5fce152f02073d211e4b0/62c75829870bb634e9aa293d_61e8cc24e27693d9ee987d9c_dubsado-logo-nav-min.png" alt="logo" />
        </a>
      </Link>
      <Link href="/">Home</Link>
    </Nav>
  );
}

export default NavBar;