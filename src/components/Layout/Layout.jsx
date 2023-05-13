import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";
import CategoryList from "../СategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";
import { useState } from "react";
import video from "../../assets/video.mp4";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <CartLink />
        <Auth />
      </header>
      <div className="video">
        <video width="400" height="300" controls="controls" autoplay="autoplay">
          <source
            src={video}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          ></source>
        </video>
      </div>
      <aside>
      
        <CategoryList />
      </aside>
      <main>
        {props.children}
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}
