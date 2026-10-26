import { useState } from "react";
import mailIcon from "./assets/figma-product/imgFrame20.svg";
import "./CartNewsletter.css";

export default function CartNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <section
      className="cart-newsletter cart-width"
      id="newsletter"
      aria-labelledby="cart-newsletter-title"
    >
      <h2 id="cart-newsletter-title">
        Stay up to date about our latest offers
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <img src={mailIcon} alt="" />
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setSubscribed(false);
            }}
          />
        </label>
        <button type="submit">
          {subscribed ? "You're subscribed!" : "Subscribe to Newsletter"}
        </button>
      </form>
    </section>
  );
}
