import { useState } from "react";
import "./ProductDetails.css";
import SiteHeader from "./components/SiteHeader.jsx";
import FooterColumn from "./components/FooterColumn.jsx";
import { footerColumns } from "./data/footerNavigation.js";
import {
  featuredProduct,
  gallery,
  productAssets,
  productReviews,
  productTabs,
  relatedProducts,
} from "./data/productDetails.js";
import chevronIcon from "./assets/figma-product/imgFrame1.svg";
import minusIcon from "./assets/figma-product/imgFrame5.svg";
import plusIcon from "./assets/figma-product/imgFrame6.svg";
import filterIcon from "./assets/figma-product/imgFrame7.svg";
import breadcrumbIcon from "./assets/figma-product/imgFrame8.svg";

function ReviewCard({ review }) {
  return (
    <article className="pd-review-card">
      <div className="pd-review-top">
        <div>
          <img className="pd-review-stars" src={review.stars} alt="Customer rating" />
          <h3>{review.name}<img src={productAssets.verifiedIcon} alt="Verified customer" /></h3>
        </div>
        <button type="button" aria-label={`More options for ${review.name}'s review`}>
          <img src={productAssets.moreIcon} alt="" />
        </button>
      </div>
      <p className="pd-review-copy">“{review.text}”</p>
      <p className="pd-review-date">Posted on {review.date}</p>
    </article>
  );
}

export default function ProductDetails({ onNavigateHome, onNavigateCategory, onNavigateCart }) {
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [selectedColor, setSelectedColor] = useState("#4f5138");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("reviews");
  const [addedToCart, setAddedToCart] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <div className="product-details-page">
      <SiteHeader
        page="product"
        onNavigateHome={onNavigateHome}
        onNavigateCategory={onNavigateCategory}
        onNavigateCart={onNavigateCart}
      />
      <main className="pd-width">
        <nav className="pd-breadcrumbs" aria-label="Breadcrumb">
          <a href="#">Home</a><img src={breadcrumbIcon} alt="" />
          <a href="#related">Shop</a><img src={breadcrumbIcon} alt="" />
          <a href="#related">Men</a><img src={breadcrumbIcon} alt="" />
          <span>T-shirts</span>
        </nav>

        <section className="pd-product" aria-labelledby="pd-product-title">
          <div className="pd-gallery">
            <div className="pd-thumbnails" aria-label="Product images">
              {gallery.map((image, index) => (
                <button
                  className={selectedImage.src === image.src ? "is-selected" : ""}
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Show product image ${index + 1}`}
                  aria-pressed={selectedImage.src === image.src}
                >
                  <img src={image.src} alt="" />
                </button>
              ))}
            </div>
            <div className="pd-main-image">
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
          </div>

          <div className="pd-product-info">
            <h1 className="pd-display" id="pd-product-title">{featuredProduct.name}</h1>
            <div className="pd-product-rating">
              <img src={productAssets.productStars} alt={`${featuredProduct.rating} stars`} />
              <span>{featuredProduct.rating.split("/")[0]}/<span>5</span></span>
            </div>
            <div className="pd-price">
              <strong>{featuredProduct.price}</strong>
              <del>{featuredProduct.previousPrice}</del>
              <span className="pd-sale">{featuredProduct.discount}</span>
            </div>
            <p className="pd-description">{featuredProduct.description}</p>

            <fieldset className="pd-choice-group pd-color-group">
              <legend>Select Colors</legend>
              <div className="pd-color-options">
                {featuredProduct.colors.map((color) => (
                  <button
                    className={selectedColor === color ? "is-selected" : ""}
                    key={color}
                    type="button"
                    style={{ "--swatch-color": color }}
                    aria-label={`Select color ${color}`}
                    aria-pressed={selectedColor === color}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && <span aria-hidden="true">✓</span>}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="pd-choice-group pd-size-group">
              <legend>Choose Size</legend>
              <div className="pd-size-options">
                {featuredProduct.sizes.map((size) => (
                  <button
                    className={selectedSize === size ? "is-selected" : ""}
                    key={size}
                    type="button"
                    aria-pressed={selectedSize === size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="pd-cart-actions">
              <div className="pd-quantity" aria-label="Quantity">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                  <img src={minusIcon} alt="" />
                </button>
                <span aria-live="polite">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}>
                  <img src={plusIcon} alt="" />
                </button>
              </div>
              <button className="pd-add-button" type="button" onClick={() => setAddedToCart(true)}>
                {addedToCart ? `Added ${quantity} to Cart` : "Add to Cart"}
              </button>
            </div>
          </div>
        </section>

        <section className="pd-reviews-section" aria-label="Product information and reviews">
          <div className="pd-tabs" role="tablist" aria-label="Product information">
            {productTabs.map((tab) => (
              <button
                id={`pd-tab-${tab.id}`}
                aria-controls={`pd-panel-${tab.id}`}
                aria-selected={activeTab === tab.id}
                className={activeTab === tab.id ? "is-active" : ""}
                key={tab.id}
                role="tab"
                type="button"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "reviews" && (
            <div className="pd-review-panel" id="pd-panel-reviews" role="tabpanel" aria-labelledby="pd-tab-reviews">
              <div className="pd-review-toolbar">
                <h2>All Reviews <span>({featuredProduct.reviewCount})</span></h2>
                <div className="pd-review-controls">
                  <button className="pd-filter-button" type="button" aria-label="Filter reviews"><img src={filterIcon} alt="" /></button>
                  <button className="pd-sort-button" type="button">Latest <img src={chevronIcon} alt="" /></button>
                  <button className="pd-write-button" type="button">Write a Review</button>
                </div>
              </div>
              <div className="pd-review-grid">
                {productReviews.map((review) => <ReviewCard key={review.name} review={review} />)}
              </div>
              <button className="pd-load-more" type="button">Load More Reviews</button>
            </div>
          )}

          {activeTab === "details" && (
            <div className="pd-info-panel" id="pd-panel-details" role="tabpanel" aria-labelledby="pd-tab-details">
              <h2>Product Details</h2>
              <p>{featuredProduct.details}</p>
              <ul>
                {featuredProduct.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          )}

          {activeTab === "faqs" && (
            <div className="pd-info-panel" id="pd-panel-faqs" role="tabpanel" aria-labelledby="pd-tab-faqs">
              <h2>Frequently Asked Questions</h2>
              {featuredProduct.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          )}
        </section>

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
      </main>

      <section className="pd-newsletter pd-width" id="newsletter" aria-labelledby="pd-newsletter-title">
        <h2 className="pd-display" id="pd-newsletter-title">Stay up to date about our latest offers</h2>
        <form onSubmit={handleSubscribe}>
          <label>
            <img src={productAssets.mailIcon} alt="" />
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
              value={email}
              onChange={(event) => { setEmail(event.target.value); setSubscribed(false); }}
            />
          </label>
          <button type="submit">{subscribed ? "You're subscribed!" : "Subscribe to Newsletter"}</button>
        </form>
      </section>

      <footer className="pd-footer" id="footer">
        <div className="pd-footer-main pd-width">
          <div className="pd-footer-about">
            <a className="pd-wordmark" href="#">SHOP.CO</a>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="pd-socials">
              {productAssets.socialLinks.map((social) => (
                <a key={social.name} href="#footer" aria-label={social.name}>
                  <img src={social.image} alt="" />
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              {...column}
              className="pd-footer-column"
              heading="h3"
            />
          ))}
        </div>
        <div className="pd-footer-bottom pd-width">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="pd-payment-methods" aria-label="Accepted payment methods">
            {productAssets.paymentMethods.map((method) => (
              <img key={method.name} src={method.image} alt={method.name} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
