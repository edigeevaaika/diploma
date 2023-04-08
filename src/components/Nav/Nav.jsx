import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li>
          <NavLink to="/contacts"> Contacts </NavLink>
        </li>
        <li>
          <NavLink to="/delivery"> Delivery </NavLink>
        </li>
      </ul>
    </nav>
  );
}
