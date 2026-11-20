function formatPrice(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function OrderSummary({
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
        <div><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
        <div className="cart-discount-row">
          <dt>Discount{discount > 0 && " (-20%)"}</dt>
          <dd>{discount > 0 ? `-${formatPrice(discount)}` : "$0"}</dd>
        </div>
        <div><dt>Delivery Fee</dt><dd>Free</dd></div>
        <div className="cart-total-row">
          <dt>Total</dt><dd>{formatPrice(subtotal - discount)}</dd>
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
          <span className="cart-tag-icon" aria-hidden="true">%</span>
          <input
            type="text"
            value={promoCode}
            onChange={(event) => onPromoCodeChange(event.target.value)}
            placeholder="Add promo code"
            aria-label="Promo code"
          />
        </label>
        <button className="cart-apply-button" type="submit">Apply</button>
      </form>
      {promoMessage && (
        <p
          className={`cart-promo-message ${discount > 0 ? "is-success" : "is-error"}`}
          role="status"
        >
          {promoMessage}
        </p>
      )}
      <button className="cart-checkout-button" type="button" onClick={onCheckout}>
        Go to Checkout <span aria-hidden="true">→</span>
      </button>
    </aside>
  );
}
