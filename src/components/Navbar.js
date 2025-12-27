import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/users" className="link">Users</NavLink>
    </nav>
  );
}

export default Navbar;
