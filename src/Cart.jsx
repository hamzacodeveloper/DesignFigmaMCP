import { useMemo, useState } from "react";
import "./Cart.css";
import CartNewsletter from "./CartNewsletter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import { initialCartItems } from "./data/cart.js";
import CartItem from "./components/cart/CartItem.jsx";
import CartFooter from "./components/cart/CartFooter.jsx";
import OrderSummary from "./components/cart/OrderSummary.jsx";


export default function Cart({
  onNavigateHome,
  onNavigateProduct,
  onNavigateCategory,
  onNavigateCart,
}) {
  const [items, setItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );
  const discount = appliedPromo ? Math.round(subtotal * 0.2) : 0;

  function updateQuantity(id, difference) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + difference) }
          : item,
      ),
    );
  }

  function removeItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function applyPromo() {
    if (promoCode.trim().toUpperCase() === "SHOP20") {
      setAppliedPromo(true);
      setPromoMessage("SHOP20 applied — you saved 20%.");
      return;
    }

    setAppliedPromo(false);
    setPromoMessage("That promo code isn’t valid. Try SHOP20.");
  }

  return (
    <div className="cart-page">
      <SiteHeader
        page="cart"
        onNavigateHome={onNavigateHome}
        onNavigateProduct={onNavigateProduct}
        onNavigateCategory={onNavigateCategory}
        onNavigateCart={onNavigateCart}
      />
      <main className="cart-width">
        <nav className="cart-breadcrumbs" aria-label="Breadcrumb">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onNavigateHome();
            }}
          >
            Home
          </a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Cart</span>
        </nav>
        <h1 className="cart-title">YOUR CART</h1>

        <div className="cart-layout">
          <section className="cart-items" aria-label="Shopping cart items">
            {items.length > 0 ? (
              items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={updateQuantity}
                  onRemove={removeItem}
                />
              ))
            ) : (
              <div className="cart-empty">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven’t added anything to your cart yet.</p>
                <button type="button" onClick={() => onNavigateProduct()}>
                  Continue Shopping
                </button>
              </div>
            )}
          </section>

          {items.length > 0 && (
            <OrderSummary
              subtotal={subtotal}
              discount={discount}
              promoCode={promoCode}
              promoMessage={promoMessage}
              onPromoCodeChange={(value) => {
                setPromoCode(value);
                setPromoMessage("");
              }}
              onApplyPromo={applyPromo}
              onCheckout={() =>
                setCheckoutMessage("Checkout is not available yet.")
              }
            />
          )}
        </div>
        {checkoutMessage && (
          <p className="cart-checkout-message" role="status">
            {checkoutMessage}
          </p>
        )}
      </main>
      <CartNewsletter />
      <CartFooter onNavigateHome={onNavigateHome} />
    </div>
  );
}
