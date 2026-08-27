import "./Products.css";
import ProductCard from "./ProductCard";


const products = [
  { id: 1, name: "Syltherine", description: "Stylish cafe chair", image: "Images.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", badge: "-30%" },
  { id: 2, name: "Leviosa", description: "Stylish cafe chair", image: "Pop Up.png", price: "Rp 2.500.000" },
  { id: 3, name: "Lolito", description: "Luxury big sofa", image: "Images (1).png", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", badge: "-50%" },
  { id: 4, name: "Respira", description: "Outdoor bar table and stool", image: "image 4.png", price: "Rp 500.000", badge: "New" },
  { id: 5, name: "Grifo", description: "Night lamp", image: "Images (2).png", price: "Rp 1.500.000" },
  { id: 6, name: "Muggo", description: "Small mug", image: "Images (3).png", price: "Rp 150.000", badge: "New" },
  { id: 7, name: "Pingky", description: "Cute bed set", image: "Images (4).png", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", badge: "-50%" },
  { id: 8, name: "Potty", description: "Minimalist flower pot", image: "Images (5).png", price: "Rp 500.000", badge: "New" },
];

export default function Products() {
  return (
    <section>
      <div className="section-heading">
        <h2 id="black">Our Products</h2>
        <p id="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="products">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="show-more-btn">Show More</button>
      </div>
    </section>
  );
}