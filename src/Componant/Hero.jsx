import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" >
      <img
        className="hero__bg"
        src="scandinavian-interior-mockup-wall-decal-background 1.png"
        alt="Styled living room with a rattan chair and potted plant"
      />
      <div className="hero__card">
        <p className="hero__eyebrow">New Arrival</p>
        <h1 className="hero__title">
          Discover Our
          <br />
          New Collection
        </h1>
        <p className="hero__copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <a href="#products" className="btn">
          Buy Now
        </a>
      </div>
    </section>
  );
}
