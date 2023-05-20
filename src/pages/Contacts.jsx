import "./Contacts.css";
export default function Contacts() {
  return (
    <div className="Contacts">
      <div className="contact-1">
        <h1>Here is our contacts number </h1>
        <p>This my awesome dairy store "Belaya Reka" </p>
        <p>We only use natural intedients to make our yummy dairy products</p>
      </div>
      <div className="contacts-flex">
        <div className="contacts_map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b6995b01d3ddfe5795e602e4fd8ca769031e0dd6e49490a9d98835de199d5ec&amp;source=constructor"
            width="328"
            height="353"
            frameborder="0"
          ></iframe>
        </div>

        <div className="contacts-2">
          <h3>Contact us</h3>
          <p>aidaraliev@kantsut.kg</p>
          <p>+996 (553) 333-000</p>
          <p>export@kantsut.kg</p>
          <div className="adress">
            <p>
              725000 Kyrgyzstan Kant, <br /> Lineynaya str.,15
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
