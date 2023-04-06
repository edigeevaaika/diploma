import "./Nav.css";
import { NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <nav className="Nav">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
      </nav>
  );
}