import { useMemo, useState } from "react";
import "./Cart.css";
import CartNewsletter from "./CartNewsletter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import { initialCartItems, paymentMethods } from "./data/cart.js";

function formatPrice(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <article className="cart-item">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-info">
        <div className="cart-item-top">
          <h2>{item.name}</h2>
          <button
            className="cart-remove"
            type="button"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from cart`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M10 11v6m4-6v6M5.5 7l1 13h11l1-13M9 7V4h6v3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p>
          Size: <span>{item.size}</span>
        </p>
        <p>
          Color: <span>{item.color}</span>
        </p>
        <strong className="cart-item-price">{formatPrice(item.price)}</strong>
        <div className="cart-quantity" aria-label={`Quantity for ${item.name}`}>
          <button
            type="button"
            aria-label={`Decrease ${item.name} quantity`}
            onClick={() => onQuantityChange(item.id, -1)}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span aria-live="polite">{item.quantity}</span>
          <button
            type="button"
            aria-label={`Increase ${item.name} quantity`}
            onClick={() => onQuantityChange(item.id, 1)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

function OrderSummary({
  subtotal,
  discount,
  promoCode,
  promoMessage,
  onPromoCodeChange,
  onApplyPromo,
  onCheckout,
}) {
  return (
    <aside className="cart-summary" aria-labelledby="cart-summary-title">
      <h2 id="cart-summary-title">Order Summary</h2>
      <dl>
        <div>
          <dt>Subtotal</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="cart-discount-row">
          <dt>Discount{discount > 0 && " (-20%)"}</dt>
          <dd>{discount > 0 ? `-${formatPrice(discount)}` : "$0"}</dd>
        </div>
        <div>
          <dt>Delivery Fee</dt>
          <dd>Free</dd>
        </div>
        <div className="cart-total-row">
          <dt>Total</dt>
          <dd>{formatPrice(subtotal - discount)}</dd>
        </div>
      </dl>
      <form
        className="cart-promo-form"
        onSubmit={(event) => {
          event.preventDefault();
          onApplyPromo();
        }}
      >
        <label className="cart-promo-input">
          <span className="cart-tag-icon" aria-hidden="true">
            %
          </span>
          <input
            type="text"
            value={promoCode}
            onChange={(event) => onPromoCodeChange(event.target.value)}
            placeholder="Add promo code"
            aria-label="Promo code"
          />
        </label>
        <button className="cart-apply-button" type="submit">
          Apply
        </button>
      </form>
      {promoMessage && (
        <p
          className={`cart-promo-message ${discount > 0 ? "is-success" : "is-error"}`}
          role="status"
        >
          {promoMessage}
        </p>
      )}
      <button
        className="cart-checkout-button"
        type="button"
        onClick={onCheckout}
      >
        Go to Checkout <span aria-hidden="true">→</span>
      </button>
    </aside>
  );
}

function CartFooter({ onNavigateHome }) {
  return (
    <footer className="cart-footer" id="cart-footer">
      <div className="cart-footer-inner cart-width">
        <div className="cart-footer-brand">
          <a
            className="cart-wordmark"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onNavigateHome();
            }}
          >
            SHOP.CO
          </a>
          <p>
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>
        </div>
        <div className="cart-payment-methods" aria-label="Accepted payment methods">
          {paymentMethods.map((method) => (
            <img key={method.name} src={method.image} alt={method.name} />
          ))}
        </div>
        <p className="cart-copyright">Shop.co © 2000–2023, All Rights Reserved</p>
      </div>
    </footer>
  );
}

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
