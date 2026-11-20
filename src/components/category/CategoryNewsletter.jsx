import { useState } from "react";
import emailIcon from "../../assets/figma-category/imgFrame6.svg";

export default function CategoryNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <section className="category-newsletter category-width" id="newsletter">
      <h2>Stay up to date about our latest offers</h2>
      <form onSubmit={handleSubscribe}>
        <label>
          <img src={emailIcon} alt="" />
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
        <button type="submit">{subscribed ? "You're subscribed!" : "Subscribe to Newsletter"}</button>
      </form>
    </section>
  );
}
