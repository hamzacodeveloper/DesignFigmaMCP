import { useState } from "react";
import "./App.css";
import SiteHeader from "./components/SiteHeader.jsx";
import FooterColumn from "./components/FooterColumn.jsx";
import { footerColumns } from "./data/footerNavigation.js";
import { homeAssets, homeProducts } from "./data/home.js";
import Hero from "./components/home/Hero.jsx";
import BrandStrip from "./components/home/BrandStrip.jsx";
import ProductSection from "./components/home/ProductSection.jsx";
import DressStyleSection from "./components/home/DressStyleSection.jsx";
import CustomerReviews from "./components/home/CustomerReviews.jsx";

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
        <Hero onNavigateProduct={onNavigateProduct} />
        <BrandStrip />

        <ProductSection title="New Arrivals" products={homeProducts.newArrivals} id="new-arrivals" onNavigateProduct={onNavigateProduct} />
        <div className="section-divider content-width" />
        <ProductSection title="Top Selling" products={homeProducts.topSelling} id="top-selling" onNavigateProduct={onNavigateProduct} />
        <DressStyleSection onNavigateProduct={onNavigateProduct} />
        <CustomerReviews />

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
