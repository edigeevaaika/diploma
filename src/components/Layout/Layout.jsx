import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";
import CategoryList from "../СategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";

export default function Layout (props){
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <CartLink/>
      </header>
      <aside>
      <CategoryList/>
      </aside>
      <main>
        {props.children}
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  );
}