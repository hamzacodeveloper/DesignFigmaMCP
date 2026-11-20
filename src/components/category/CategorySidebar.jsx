import filterIcon from "../../assets/figma-category/imgFrame7.svg";
import minusIcon from "../../assets/figma-category/imgFrame8.svg";
import priceRangeGraphic from "../../assets/figma-category/imgGroup6.svg";
import breadcrumbIcon from "../../assets/figma-category/imgFrame5.svg";
import { colors, dressStyles, productTypes, sizes } from "../../data/category.js";

export default function CategorySidebar({ filters, setFilters, onApply }) {
  function toggleFilter(group, value) {
    setFilters((current) => {
      const values = current[group];
      return {
        ...current,
        [group]: values.includes(value)
          ? values.filter((item) => item !== value)
          : [...values, value],
      };
    });
  }

  return (
    <aside className="category-sidebar" aria-label="Product filters">
      <div className="category-filter-title">
        <h2>Filters</h2>
        <img src={filterIcon} alt="" />
      </div>
      <div className="category-filter-divider" />
      <div className="category-filter-list">
        {productTypes.map((type) => (
          <label key={type}>
            <span>{type}</span>
            <input type="checkbox" checked={filters.types.includes(type)} onChange={() => toggleFilter("types", type)} />
            <img src={breadcrumbIcon} alt="" />
          </label>
        ))}
      </div>
      <div className="category-filter-divider" />
      <section className="category-filter-group">
        <h3>Price <img src={minusIcon} alt="" /></h3>
        <div className="category-price-slider">
          <img src={priceRangeGraphic} alt="" />
          <label>
            <span>$50</span>
            <input
              type="range"
              min="50"
              max="200"
              value={filters.maxPrice}
              onChange={(event) => setFilters((current) => ({ ...current, maxPrice: Number(event.target.value) }))}
              aria-label="Maximum product price"
            />
            <span>${filters.maxPrice}</span>
          </label>
        </div>
      </section>
      <div className="category-filter-divider" />
      <section className="category-filter-group">
        <h3>Colors <img src={minusIcon} alt="" /></h3>
        <div className="category-color-options">
          {colors.map((color) => (
            <button
              className={filters.colors.includes(color.name.toLowerCase()) ? "is-selected" : ""}
              key={color.name}
              type="button"
              style={{ "--swatch": color.value }}
              aria-label={`Filter by ${color.name}`}
              aria-pressed={filters.colors.includes(color.name.toLowerCase())}
              onClick={() => toggleFilter("colors", color.name.toLowerCase())}
            >
              {filters.colors.includes(color.name.toLowerCase()) && <span aria-hidden="true">✓</span>}
            </button>
          ))}
        </div>
      </section>
      <div className="category-filter-divider" />
      <section className="category-filter-group">
        <h3>Size <img src={minusIcon} alt="" /></h3>
        <div className="category-size-options">
          {sizes.map((size) => (
            <button
              className={filters.sizes.includes(size) ? "is-selected" : ""}
              key={size}
              type="button"
              aria-pressed={filters.sizes.includes(size)}
              onClick={() => toggleFilter("sizes", size)}
            >
              {size}
            </button>
          ))}
        </div>
      </section>
      <div className="category-filter-divider" />
      <section className="category-filter-group category-dress-styles">
        <h3>Dress Style <img src={minusIcon} alt="" /></h3>
        {dressStyles.map((style) => (
          <label key={style}>
            <span>{style}</span>
            <input type="checkbox" checked={filters.styles.includes(style)} onChange={() => toggleFilter("styles", style)} />
            <img src={breadcrumbIcon} alt="" />
          </label>
        ))}
      </section>
      <button className="category-apply-button" type="button" onClick={onApply}>Apply Filter</button>
    </aside>
  );
}
