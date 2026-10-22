import { NavLink } from "react-router";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <div className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <span className="brand-name">Dilnaz's blog</span>
      </div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;