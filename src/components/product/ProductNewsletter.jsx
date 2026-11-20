import { productAssets } from "../../data/productDetails.js";

export default function ProductNewsletter({ email, subscribed, onEmailChange, onSubscribe }) {
  return (
    <section className="pd-newsletter pd-width" id="newsletter" aria-labelledby="pd-newsletter-title">
      <h2 className="pd-display" id="pd-newsletter-title">Stay up to date about our latest offers</h2>
      <form onSubmit={onSubscribe}>
        <label>
          <img src={productAssets.mailIcon} alt="" />
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
          />
        </label>
        <button type="submit">{subscribed ? "You're subscribed!" : "Subscribe to Newsletter"}</button>
      </form>
    </section>
  );
}
