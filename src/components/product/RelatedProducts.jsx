import { relatedProducts } from "../../data/productDetails.js";

export default function RelatedProducts() {
  return (
    <section className="pd-related" id="related" aria-labelledby="pd-related-title">
      <h2 className="pd-display" id="pd-related-title">You might also like</h2>
      <div className="pd-related-grid">
        {relatedProducts.map((product) => (
          <article className="pd-related-product" key={product.name}>
            <div className="pd-related-image"><img src={product.image} alt={product.name} /></div>
            <h3>{product.name}</h3>
            <div className="pd-related-rating">
              <img src={product.stars} alt="Customer rating" /><span>{product.rating}</span>
            </div>
            <div className="pd-related-price">
              <strong>{product.price}</strong>
              {product.previous && <del>{product.previous}</del>}
              {product.sale && <span>{product.sale}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
