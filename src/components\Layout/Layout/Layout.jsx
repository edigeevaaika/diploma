import Nav from "../Nav/nav";
import "./Layout.css";
export default function Layout (props){
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
}