import newsImage from "../assets/news.jpg";
export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to my dairy store "Belaya Reka"</h1>
      <p>This my awesome dairy store "Belaya Reka" </p>
      <p>
        We only use natural intedients to make our yummy dairy products We only
        do what we believe in. We love what we do and that's why we do it well.
        Selling village products is a responsible process. After all, it is very
        important that they are produced in suitable conditions so that their
        beneficial properties are not lost during transportation and that our
        customers receive only fresh, high-quality food. When ordering farm
        products from us, you can be sure that we are honest and responsible
        partners, we always keep our word and care about quality.
      </p>
      <div className="News">
        <div className="news2">
          <h1>News</h1>
          <img src={newsImage} alt="news image" />
          <h2>Natural milk at a lower price</h2>
          <p>
            Volume, composition and fat content of milk are all preserved. That
            means you get the same delicious and healthy product at a lower
            price.
          </p>
        </div>
        <div className="news3">
          <iframe
            width="350"
            height="270"
            src="https://www.youtube.com/embed/6QOaqCaKdAA"
            title='"Белая Река" - мы приносим радость в каждую семью, производя полезные натуральные продукты!'
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2>Natural dairy products</h2>
          <p>
            “Belaya Reka” – we bring joy and health to every family, producing
            delicious, healthy and natural dairy products.
          </p>
        </div>
      </div>
    </div>
  );
}
