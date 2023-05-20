import "./About.css";
export default function About() {
  return (
    <div className="About">
      <h1>About all products dairy store "Belaya Reka"</h1>
      <h3>Our catalog:</h3>
      <p className="about-products">
        Sport, Milk, Kefir, Sour cream, Yogurt, Cottage cheese, Butter, Cheese,
        Chalap, Powdered milk.
      </p>
      <div className="about-row">
        <div className="col-4">
          <div className="about-photo">
            <img
              src="https://belayareka.kg/static/img/general/about1.png"
              alt=""
            />
          </div>
          <h2>Products</h2>
          <p>
            Our specialization is the production of butter, dairy and oxygen
            products from pure raw materials.
          </p>
        </div>
        <div className="col-4">
          <div className="about-photo">
            <img
              src="https://belayareka.kg/static/img/general/about2.png"
              alt=""
            />
          </div>

          <h2>Production</h2>
          <p>
            In 2012, a new building was built on the territory of the plant with
            modern equipment for the processing and packaging of dairy products.
            The company operates in a full cycle mode.
          </p>
        </div>
        <div className="col-4">
          <div className="about-photo">
            <img
              src="https://belayareka.kg/static/img/general/about3.png"
              alt=""
            />
          </div>

          <h2>Quality</h2>
          <p>
            High quality of the goods is confirmed by the international standard
            ISO 22000 “Food Safety Management Systems” and the Halal
            certificate.
          </p>
        </div>
      </div>
    </div>
  );
}
