import chevronIcon from "../../assets/figma-product/imgFrame1.svg";
import filterIcon from "../../assets/figma-product/imgFrame7.svg";
import { featuredProduct, productAssets, productReviews, productTabs } from "../../data/productDetails.js";

function ReviewCard({ review }) {
  return (
    <article className="pd-review-card">
      <div className="pd-review-top">
        <div>
          <img className="pd-review-stars" src={review.stars} alt="Customer rating" />
          <h3>{review.name}<img src={productAssets.verifiedIcon} alt="Verified customer" /></h3>
        </div>
        <button type="button" aria-label={`More options for ${review.name}'s review`}>
          <img src={productAssets.moreIcon} alt="" />
        </button>
      </div>
      <p className="pd-review-copy">“{review.text}”</p>
      <p className="pd-review-date">Posted on {review.date}</p>
    </article>
  );
}

export default function ProductReviews({ activeTab, onTabChange }) {
  return (
    <section className="pd-reviews-section" aria-label="Product information and reviews">
      <div className="pd-tabs" role="tablist" aria-label="Product information">
        {productTabs.map((tab) => (
          <button
            id={`pd-tab-${tab.id}`}
            aria-controls={`pd-panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? "is-active" : ""}
            key={tab.id}
            role="tab"
            type="button"
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === "reviews" && (
        <div className="pd-review-panel" id="pd-panel-reviews" role="tabpanel" aria-labelledby="pd-tab-reviews">
          <div className="pd-review-toolbar">
            <h2>All Reviews <span>({featuredProduct.reviewCount})</span></h2>
            <div className="pd-review-controls">
              <button className="pd-filter-button" type="button" aria-label="Filter reviews"><img src={filterIcon} alt="" /></button>
              <button className="pd-sort-button" type="button">Latest <img src={chevronIcon} alt="" /></button>
              <button className="pd-write-button" type="button">Write a Review</button>
            </div>
          </div>
          <div className="pd-review-grid">
            {productReviews.map((review) => <ReviewCard key={review.name} review={review} />)}
          </div>
          <button className="pd-load-more" type="button">Load More Reviews</button>
        </div>
      )}
      {activeTab === "details" && (
        <div className="pd-info-panel" id="pd-panel-details" role="tabpanel" aria-labelledby="pd-tab-details">
          <h2>Product Details</h2><p>{featuredProduct.details}</p>
          <ul>{featuredProduct.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </div>
      )}
      {activeTab === "faqs" && (
        <div className="pd-info-panel" id="pd-panel-faqs" role="tabpanel" aria-labelledby="pd-tab-faqs">
          <h2>Frequently Asked Questions</h2>
          {featuredProduct.faqs.map((faq) => (
            <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>
          ))}
        </div>
      )}
    </section>
  );
}
