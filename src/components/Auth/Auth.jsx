import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span className="Login">
      <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png" alt="" /> <button onClick={logIn}>Sign in</button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span className="Logout">
        <Link to={"/orders"} className="OrderLink"><img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png" alt="" /></Link>
        <button onClick={logOut}>Sign out</button>
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}