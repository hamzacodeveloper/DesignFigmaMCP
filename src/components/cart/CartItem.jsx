export default function CartItem({ item, onQuantityChange, onRemove }) {
  function formatPrice(amount) {
    return `$${amount.toLocaleString("en-US")}`;
  }

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
        <p>Size: <span>{item.size}</span></p>
        <p>Color: <span>{item.color}</span></p>
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
