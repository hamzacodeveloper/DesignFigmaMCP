import { homeAssets } from "../../data/home.js";

function ProductCard({ product, onNavigateProduct }) {
  return (
    <article className="product-card">
      <button className="home-product-link" type="button" onClick={onNavigateProduct} aria-label={`View ${product.name}`}>
        <span className="product-image"><img src={product.image} alt="" /></span>
        <span className="home-product-name">{product.name}</span>
      </button>
      <div className="product-rating">
        <img src={homeAssets.ratingStars} alt="Rated with stars" />
        <span>{product.rating}</span>
      </div>
      <div className="product-price">
        <strong>{product.price}</strong>
        {product.oldPrice && <del>{product.oldPrice}</del>}
        {product.discount && <span className="discount">{product.discount}</span>}
      </div>
    </article>
  );
}

export default function ProductSection({ title, products, id, onNavigateProduct }) {
  return (
    <section className="product-section content-width" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="display-heading section-title" id={`${id}-title`}>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} onNavigateProduct={onNavigateProduct} />
        ))}
      </div>
      <button className="outline-button" type="button" onClick={onNavigateProduct}>View All</button>
    </section>
  );
}
