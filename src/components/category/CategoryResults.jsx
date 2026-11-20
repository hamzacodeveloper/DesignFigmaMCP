import filterIcon from "../../assets/figma-category/imgFrame7.svg";

function ProductCard({ product, onNavigateProduct }) {
  return (
    <article className="category-product-card">
      <button className="category-product-link" type="button" onClick={onNavigateProduct} aria-label={`View ${product.name}`}>
        <span className="category-product-image"><img src={product.image} alt="" /></span>
        <span className="category-product-name">{product.name}</span>
      </button>
      <div className="category-product-rating">
        <img src={product.stars} alt="Customer rating" /><span>{product.rating}</span>
      </div>
      <div className="category-product-price">
        <strong>${product.price}</strong>
        {product.previous && <del>${product.previous}</del>}
        {product.discount && <span>{product.discount}</span>}
      </div>
    </article>
  );
}

export default function CategoryResults({
  visibleProducts,
  sort,
  page,
  onSortChange,
  onPageChange,
  onToggleFilters,
  onClearFilters,
  onNavigateProduct,
}) {
  return (
    <section className="category-results" id="products" aria-labelledby="category-title">
      <div className="category-results-heading">
        <h1 id="category-title">Casual</h1>
        <div className="category-results-tools">
          <p>Showing 1-{visibleProducts.length} of 100 Products</p>
          <label>Sort by:
            <select value={sort} onChange={(event) => onSortChange(event.target.value)} aria-label="Sort products">
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>
        <button className="category-mobile-filter-toggle" type="button" onClick={onToggleFilters}>
          <img src={filterIcon} alt="" /> Filters
        </button>
      </div>
      {visibleProducts.length > 0 ? (
        <div className="category-product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.name} product={product} onNavigateProduct={onNavigateProduct} />
          ))}
        </div>
      ) : (
        <div className="category-no-results">
          <h2>No products match these filters</h2>
          <p>Try changing your filters to see more products.</p>
          <button type="button" onClick={onClearFilters}>Clear filters</button>
        </div>
      )}
      <nav className="category-pagination" aria-label="Product pages">
        <button type="button" disabled={page === 1} onClick={() => onPageChange(Math.max(1, page - 1))}>
          <span aria-hidden="true">←</span> Previous
        </button>
        <div className="category-page-numbers">
          {[1, 2, 3, "...", 8, 9, 10].map((number, index) => (
            <button
              className={number === page ? "is-current" : ""}
              disabled={number === "..."}
              key={`${number}-${index}`}
              type="button"
              aria-current={number === page ? "page" : undefined}
              onClick={() => typeof number === "number" && onPageChange(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => onPageChange(Math.min(10, page + 1))}>
          Next <span aria-hidden="true">→</span>
        </button>
      </nav>
    </section>
  );
}
