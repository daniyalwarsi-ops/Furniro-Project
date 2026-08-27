export default function ProductCard({ product }) {
  let badgeElement = null;

  if (product.badge) {
    badgeElement = <span className="badge">{product.badge}</span>;
  }

let oldPriceElement = null;
  if (product.oldPrice) {
    oldPriceElement = <span className="old-price">{product.oldPrice}</span>;
  }

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} className="product-img" />
        {badgeElement}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price">
          <span className="current-price">{product.price}</span>
          {oldPriceElement}
        </div>
      </div>
    </div>
  );
}