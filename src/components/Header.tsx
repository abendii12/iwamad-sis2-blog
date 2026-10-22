import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";
import Button from "./ui/Button";
import logo from "../assets/logo.svg";

function Header() {
  const { isSignedIn, signOut } = useAuth();

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
        <NavLink to="/favorites">Favorites</NavLink>
        {isSignedIn ? (
          <Button variant="secondary" onClick={signOut}>Sign out</Button>
        ) : (
          <NavLink to="/signin">Sign in</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;