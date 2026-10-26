import { useState } from "react";
import "./App.css";
import SiteHeader from "./components/SiteHeader.jsx";
import FooterColumn from "./components/FooterColumn.jsx";
import { footerColumns } from "./data/footerNavigation.js";
import { homeAssets, homeProducts, homeReviews, styleCategories } from "./data/home.js";
import heroImage from "./assets/figma/imgRectangle2.png";

function ProductCard({ product, onNavigateProduct }) {
  return (
    <article className="product-card">
      <button className="home-product-link" type="button" onClick={onNavigateProduct} aria-label={`View ${product.name}`}>
        <span className="product-image">
          <img src={product.image} alt="" />
        </span>
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

function ProductSection({ title, products, id, onNavigateProduct }) {
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

export default function Home({ onNavigateProduct, onNavigateCategory, onNavigateCart }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <div className="shop-app">
      <SiteHeader
        page="home"
        onNavigateProduct={onNavigateProduct}
        onNavigateCategory={onNavigateCategory}
        onNavigateCart={onNavigateCart}
      />

      <main>
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

        <section className="brand-strip" aria-label="Featured brands">
          <div className="brand-row content-width">
            {homeAssets.brands.map((brand) => (
              <img key={brand.name} src={brand.image} alt={brand.name} />
            ))}
          </div>
        </section>

        <ProductSection title="New Arrivals" products={homeProducts.newArrivals} id="new-arrivals" onNavigateProduct={onNavigateProduct} />
        <div className="section-divider content-width" />
        <ProductSection title="Top Selling" products={homeProducts.topSelling} id="top-selling" onNavigateProduct={onNavigateProduct} />

        <section className="style-panel content-width" id="browse-styles" aria-labelledby="style-title">
          <h2 className="display-heading" id="style-title">Browse by dress style</h2>
          <div className="category-grid">
            {styleCategories.map((category) => (
              <button className={`category-card ${category.className}`} key={category.name} type="button" onClick={onNavigateProduct}>
                <img src={category.image} alt="" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="reviews-section" aria-labelledby="reviews-title">
          <div className="reviews-heading content-width">
            <h2 className="display-heading" id="reviews-title">Our happy customers</h2>
            <div className="review-arrows" aria-hidden="true"><span>←</span><span>→</span></div>
          </div>
          <div className="review-window">
            <div className="review-track">
              {homeReviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <img className="review-stars" src={homeAssets.reviewStars} alt="5 out of 5 stars" />
                  <h3>{review.name}<img src={homeAssets.verifiedIcon} alt="Verified customer" /></h3>
                  <p>“{review.text}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter content-width" id="newsletter" aria-labelledby="newsletter-title">
          <h2 className="display-heading" id="newsletter-title">Stay up to date about our latest offers</h2>
          <form onSubmit={handleSubscribe}>
            <label className="newsletter-input">
              <span aria-hidden="true">✉</span>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => { setEmail(event.target.value); setSubscribed(false); }}
                required
                aria-label="Email address"
              />
            </label>
            <button type="submit">{subscribed ? "You're subscribed!" : "Subscribe to Newsletter"}</button>
          </form>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-inner content-width">
          <div className="footer-about">
            <a className="wordmark" href="#">SHOP.CO</a>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="social-links">
              <a className="social-icon" href="#footer" aria-label="Twitter">𝕏</a>
              <a className="social-icon" href="#footer" aria-label="Facebook">f</a>
              <a className="social-icon" href="#footer" aria-label="Instagram">◎</a>
              <a className="social-icon" href="#footer" aria-label="GitHub">⌘</a>
            </div>
          </div>
          {footerColumns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>
        <div className="footer-bottom content-width">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="payment-methods" aria-label="Accepted payment methods">
            {homeAssets.paymentMethods.map((method) => (
              <img key={method.name} src={method.image} alt={method.name} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
