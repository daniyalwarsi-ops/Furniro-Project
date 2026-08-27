import "./Browse.css";

export default function Browse() {
  return (
    <section className="browse container">
      <div className="section-heading">
        <h2 id="black">Browse The Range</h2>
        <p id="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="image">
        <div className="center">
          <img src="Mask Group.png" alt="" />
          <h1 >Dining</h1>
        </div>
        <div className="center">
          <img src="Image-living room.png" alt="" />
          <h1>Living</h1>
        </div>
        <div className="center">
          <img src="Mask Group (1).png" alt="" />
          <h1>Bedroom</h1>
        </div>
      </div>
    </section>
  );
}
