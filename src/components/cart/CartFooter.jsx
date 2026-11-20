import { paymentMethods } from "../../data/cart.js";

export default function CartFooter({ onNavigateHome }) {
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
