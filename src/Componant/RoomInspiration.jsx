import "./RoomInspiration.css";

export default function RoomInspiration() {
  return (
    <section className="rooms">
      <div className="container rooms__inner">
        <div className="rooms__text">
          <h2>
            50+ Beautiful rooms
            <br />
            inspiration
          </h2>
          <p>
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <div className="btn">
            <a href="#products">Explore More</a>
          </div>
        </div>

        <div className="rooms__gallery">
          <div className="rooms__card">
            <img
              src="Rectangle 24.png"
              alt="Bedroom styled with framed prints and soft textiles"
            />
            <div className="rooms__card-tag">
              <p className="rooms__card-eyebrow">01 — Bed Room</p>
              <p className="rooms__card-title">Inner Peace</p>
            </div>
          </div>
          <div className="rooms__card">
            <img
              className="rooms__side-image"
              src="Rectangle 25.png"
              alt="Bright dining room with wooden table and chairs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
