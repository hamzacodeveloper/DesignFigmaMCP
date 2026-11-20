import { styleCategories } from "../../data/home.js";

export default function DressStyleSection({ onNavigateProduct }) {
  return (
    <section className="style-panel content-width" id="browse-styles" aria-labelledby="style-title">
      <h2 className="display-heading" id="style-title">Browse by dress style</h2>
      <div className="category-grid">
        {styleCategories.map((category) => (
          <button
            className={`category-card ${category.className}`}
            key={category.name}
            type="button"
            onClick={onNavigateProduct}
          >
            <img src={category.image} alt="" />
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
