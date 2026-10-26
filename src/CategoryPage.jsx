import { useMemo, useState } from "react";
import "./CategoryPage.css";
import SiteHeader from "./components/SiteHeader.jsx";
import FooterColumn from "./components/FooterColumn.jsx";
import { footerColumns } from "./data/footerNavigation.js";
import {
  categoryPaymentMethods,
  categoryProducts,
  colors,
  dressStyles,
  productTypes,
  sizes,
} from "./data/category.js";
import breadcrumbIcon from "./assets/figma-category/imgFrame5.svg";
import filterIcon from "./assets/figma-category/imgFrame7.svg";
import minusIcon from "./assets/figma-category/imgFrame8.svg";
import priceRangeGraphic from "./assets/figma-category/imgGroup6.svg";
import emailIcon from "./assets/figma-category/imgFrame6.svg";
import twitterIcon from "./assets/figma-category/imgGroup.svg";
import facebookIcon from "./assets/figma-category/imgGroup1.svg";
import instagramIcon from "./assets/figma-category/imgGroup2.svg";
import githubIcon from "./assets/figma-category/imgGroup3.svg";

function Sidebar({ filters, setFilters, onApply }) {
  function toggleFilter(group, value) {
    setFilters((current) => {
      const values = current[group];
      return {
        ...current,
        [group]: values.includes(value) ? values.filter((item) => item !== value) : [...values, value],
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

function ProductCard({ product, onNavigateProduct }) {
  return (
    <article className="category-product-card">
      <button className="category-product-link" type="button" onClick={onNavigateProduct} aria-label={`View ${product.name}`}>
        <span className="category-product-image"><img src={product.image} alt="" /></span>
        <span className="category-product-name">{product.name}</span>
      </button>
      <div className="category-product-rating">
        <img src={product.stars} alt="Customer rating" />
        <span>{product.rating}</span>
      </div>
      <div className="category-product-price">
        <strong>${product.price}</strong>
        {product.previous && <del>${product.previous}</del>}
        {product.discount && <span>{product.discount}</span>}
      </div>
    </article>
  );
}

export default function CategoryPage({ onNavigateHome, onNavigateProduct, onNavigateCategory, onNavigateCart }) {
  const [filters, setFilters] = useState({
    types: [],
    colors: [],
    sizes: ["Large"],
    styles: [],
    maxPrice: 200,
  });
  const [appliedFilters, setAppliedFilters] = useState({
    types: [],
    colors: [],
    sizes: [],
    styles: [],
    maxPrice: 300,
  });
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const visibleProducts = useMemo(() => {
    let result = categoryProducts.filter((product) => {
      const matchesType = appliedFilters.types.length === 0 || appliedFilters.types.includes(product.type);
      const matchesColor = appliedFilters.colors.length === 0 || product.colors.some((color) => appliedFilters.colors.includes(color));
      const matchesSize = appliedFilters.sizes.length === 0 || product.sizes.some((size) => appliedFilters.sizes.includes(size));
      const matchesStyle = appliedFilters.styles.length === 0 || product.styles.some((style) => appliedFilters.styles.includes(style));
      return matchesType && matchesColor && matchesSize && matchesStyle && product.price <= appliedFilters.maxPrice;
    });

    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => Number(b.rating.split("/")[0]) - Number(a.rating.split("/")[0]));
    return result;
  }, [appliedFilters, sort]);

  function handleSubscribe(event) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  function applyFilters() {
    setAppliedFilters(filters);
    setPage(1);
    setMobileFiltersOpen(false);
  }

  return (
    <div className="category-page">
      <SiteHeader
        page="category"
        onNavigateHome={onNavigateHome}
        onNavigateCategory={onNavigateCategory}
        onNavigateCart={onNavigateCart}
      />
      <main className="category-width">
        <nav className="category-breadcrumbs" aria-label="Breadcrumb">
          <a href="/" onClick={(event) => { event.preventDefault(); onNavigateHome(); }}>Home</a>
          <img src={breadcrumbIcon} alt="" />
          <span>Casual</span>
        </nav>

        <div className="category-layout">
          <div className={`category-mobile-filter ${mobileFiltersOpen ? "is-open" : ""}`}>
            <Sidebar filters={filters} setFilters={setFilters} onApply={applyFilters} />
          </div>
          <section className="category-results" id="products" aria-labelledby="category-title">
            <div className="category-results-heading">
              <h1 id="category-title">Casual</h1>
              <div className="category-results-tools">
                <p>Showing 1-{visibleProducts.length} of 100 Products</p>
                <label>Sort by:
                  <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products">
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </label>
              </div>
              <button className="category-mobile-filter-toggle" type="button" onClick={() => setMobileFiltersOpen((open) => !open)}>
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
                <button type="button" onClick={() => {
                  const emptyFilters = { types: [], colors: [], sizes: [], styles: [], maxPrice: 200 };
                  setFilters(emptyFilters);
                  setAppliedFilters(emptyFilters);
                }}>Clear filters</button>
              </div>
            )}

            <nav className="category-pagination" aria-label="Product pages">
              <button type="button" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>
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
                    onClick={() => typeof number === "number" && setPage(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setPage((current) => Math.min(10, current + 1))}>
                Next <span aria-hidden="true">→</span>
              </button>
            </nav>
          </section>
        </div>
      </main>

      <section className="category-newsletter category-width" id="newsletter">
        <h2>Stay up to date about our latest offers</h2>
        <form onSubmit={handleSubscribe}>
          <label>
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="Enter your email address" aria-label="Email address" required value={email} onChange={(event) => { setEmail(event.target.value); setSubscribed(false); }} />
          </label>
          <button type="submit">{subscribed ? "You're subscribed!" : "Subscribe to Newsletter"}</button>
        </form>
      </section>
      <footer className="category-footer" id="footer">
        <div className="category-footer-main category-width">
          <div className="category-footer-about">
            <a className="category-wordmark" href="/" onClick={(event) => { event.preventDefault(); onNavigateHome(); }}>SHOP.CO</a>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className="category-socials">
              <a href="#footer" aria-label="Twitter"><img src={twitterIcon} alt="" /></a>
              <a href="#footer" aria-label="Facebook"><img src={facebookIcon} alt="" /></a>
              <a href="#footer" aria-label="Instagram"><img src={instagramIcon} alt="" /></a>
              <a href="#footer" aria-label="GitHub"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              {...column}
              className="category-footer-column"
              heading="h3"
            />
          ))}
        </div>
        <div className="category-footer-bottom category-width">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div>
            {categoryPaymentMethods.map((method) => (
              <img key={method.name} src={method.image} alt={method.name} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
