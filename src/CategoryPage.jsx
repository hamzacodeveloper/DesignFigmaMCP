import { useMemo, useState } from "react";
import "./CategoryPage.css";
import SiteHeader from "./components/SiteHeader.jsx";
import { categoryProducts } from "./data/category.js";
import breadcrumbIcon from "./assets/figma-category/imgFrame5.svg";
import CategorySidebar from "./components/category/CategorySidebar.jsx";
import CategoryResults from "./components/category/CategoryResults.jsx";
import CategoryNewsletter from "./components/category/CategoryNewsletter.jsx";
import CategoryFooter from "./components/category/CategoryFooter.jsx";

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

  function applyFilters() {
    setAppliedFilters(filters);
    setPage(1);
    setMobileFiltersOpen(false);
  }

  function clearFilters() {
    const emptyFilters = { types: [], colors: [], sizes: [], styles: [], maxPrice: 200 };
    setFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
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
            <CategorySidebar filters={filters} setFilters={setFilters} onApply={applyFilters} />
          </div>
          <CategoryResults
            visibleProducts={visibleProducts}
            sort={sort}
            page={page}
            onSortChange={setSort}
            onPageChange={setPage}
            onToggleFilters={() => setMobileFiltersOpen((open) => !open)}
            onClearFilters={clearFilters}
            onNavigateProduct={onNavigateProduct}
          />
        </div>
      </main>
      <CategoryNewsletter />
      <CategoryFooter onNavigateHome={onNavigateHome} />
    </div>
  );
}
