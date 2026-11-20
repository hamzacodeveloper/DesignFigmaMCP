import heroImage from "../../assets/figma/imgRectangle2.png";

export default function Hero({ onNavigateProduct }) {
  return (
    <section className="hero">
      <div className="hero-inner content-width">
        <div className="hero-copy">
          <h1 className="display-heading">Find clothes that matches your style</h1>
          <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="shop-button" type="button" onClick={onNavigateProduct}>Shop Now</button>
          <div className="hero-stats" aria-label="Shop statistics">
            <div><strong>200+</strong><span>International Brands</span></div>
            <i aria-hidden="true" />
            <div><strong>2,000+</strong><span>High-Quality Products</span></div>
            <i aria-hidden="true" />
            <div><strong>30,000+</strong><span>Happy Customers</span></div>
          </div>
        </div>
        <img className="hero-image" src={heroImage} alt="Models wearing the latest Shop.co collection" />
        <span className="sparkle sparkle-large" aria-hidden="true">✦</span>
        <span className="sparkle sparkle-small" aria-hidden="true">✦</span>
      </div>
    </section>
  );
}
