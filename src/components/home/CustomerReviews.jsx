import { homeAssets, homeReviews } from "../../data/home.js";

export default function CustomerReviews() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-heading content-width">
        <h2 className="display-heading" id="reviews-title">Our happy customers</h2>
        <div className="review-arrows" aria-hidden="true"><span>←</span><span>→</span></div>
      </div>
      <div className="review-window">
        <div className="review-track">
          {homeReviews.map((review) => (
            <article className="review-card" key={review.name}>
              <img className="review-stars" src={homeAssets.reviewStars} alt="5 out of 5 stars" />
              <h3>{review.name}<img src={homeAssets.verifiedIcon} alt="Verified customer" /></h3>
              <p>“{review.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
