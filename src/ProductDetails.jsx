import { useState } from "react";
import "./ProductDetails.css";
import SiteHeader from "./components/SiteHeader.jsx";
import breadcrumbIcon from "./assets/figma-product/imgFrame8.svg";
import {
  featuredProduct,
  gallery,
} from "./data/productDetails.js";
import ProductGallery from "./components/product/ProductGallery.jsx";
import ProductInfo from "./components/product/ProductInfo.jsx";
import ProductReviews from "./components/product/ProductReviews.jsx";
import RelatedProducts from "./components/product/RelatedProducts.jsx";
import ProductNewsletter from "./components/product/ProductNewsletter.jsx";
import ProductFooter from "./components/product/ProductFooter.jsx";

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
          <ProductGallery
            gallery={gallery}
            selectedImage={selectedImage}
            onSelectImage={setSelectedImage}
          />
          <ProductInfo
            product={featuredProduct}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            addedToCart={addedToCart}
            onSelectColor={(color) => {
              setSelectedColor(color);
            }}
            onSelectSize={(size) => {
              setSelectedSize(size);
            }}
            onQuantityChange={(value) => {
              setQuantity(value);
            }}
            onAddToCart={() => setAddedToCart(true)}
          />
        </section>

        <ProductReviews activeTab={activeTab} onTabChange={setActiveTab} />
        <RelatedProducts />
      </main>

      <ProductNewsletter
        email={email}
        subscribed={subscribed}
        onEmailChange={(value) => {
          setEmail(value);
          setSubscribed(false);
        }}
        onSubscribe={handleSubscribe}
      />
      <ProductFooter />
    </div>
  );
}
