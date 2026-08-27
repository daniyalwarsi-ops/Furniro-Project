import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">

        <div className="footer__brand">
          <h2>Funiro.</h2>
          <p>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Links</p>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Help</p>
          <a href="">Payment Options</a>
          <a href="">Returns</a>
          <a href="">Privacy Policies</a>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Newsletter</p>
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer__bottom">
        <p>2023 Furino. All rights reverved</p>
      </div>
    </footer>
  );
}