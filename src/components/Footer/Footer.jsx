import "./Footer.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

export default function Footer(Footer) {
  return (
    <div className="Footer">
      <div className="Footer_link">
        <div className="Logo">
          <Logo />
        </div>
        <div className="Footer_nav">
          <h3>Links</h3>
          <Nav />
        </div>
        <div className="Footer_news">
          <h3>Latest news</h3>
          <div className="Footer_card">
            <div className="Footer_card_1">
              <div className="Card_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, id officiis. <br />
                <span>19.06.2023</span>
              </div>
            </div>
            <div className="Footer_card_1">
              <div className="Card_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, id officiis.
                <span>19.06.2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_contacts">
          <h3>Contact us</h3>
          <p>aidaraliev@kantsut.kg</p>
          <p>+996 (553) 333-000</p>
          <p>export@kantsut.kg</p>
        </div>
      </div>
    </div>
  );
}
