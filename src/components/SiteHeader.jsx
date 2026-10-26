import { useState } from "react";
import closeIcon from "../assets/figma/imgFrame.svg";
import chevronIcon from "../assets/figma/imgFrame1.svg";
import searchIcon from "../assets/figma/imgFrame2.svg";
import cartIcon from "../assets/figma/imgFrame3.svg";
import accountIcon from "../assets/figma/imgFrame4.svg";

const headerVariants = {
  home: {
    announcement: "announcement",
    header: "site-header content-width",
    logo: "wordmark",
    nav: "main-nav",
    search: "search-field",
    actions: "header-actions",
    actionButton: "icon-button",
    dismissLabel: "Dismiss offer",
    logoHref: "#",
    links: [
      { label: "Shop", href: "/product-details", navigate: "product", icon: true },
      { label: "On Sale", href: "#top-selling" },
      { label: "New Arrivals", href: "/category", navigate: "category" },
      { label: "Brands", href: "#footer" },
    ],
  },
  category: {
    announcement: "category-announcement",
    header: "category-header category-width",
    logo: "category-wordmark",
    nav: "category-nav",
    search: "category-search",
    actions: "category-header-actions",
    actionButton: "",
    dismissLabel: "Dismiss announcement",
    logoHref: "/",
    links: [
      { label: "Shop", href: "/product-details", icon: true },
      { label: "On Sale", href: "#products" },
      { label: "New Arrivals", href: "/category", navigate: "category", current: true },
      { label: "Brands", href: "#footer" },
    ],
  },
  product: {
    announcement: "pd-announcement",
    header: "pd-header pd-width",
    logo: "pd-wordmark",
    nav: "pd-nav",
    search: "pd-search",
    actions: "pd-header-actions",
    actionButton: "",
    dismissLabel: "Dismiss announcement",
    logoHref: "/",
    links: [
      { label: "Shop", href: "/product-details", current: true, icon: true },
      { label: "On Sale", href: "#related" },
      { label: "New Arrivals", href: "/category", navigate: "category" },
      { label: "Brands", href: "#footer" },
    ],
  },
  cart: {
    announcement: "cart-announcement",
    header: "cart-header cart-width",
    logo: "cart-wordmark",
    nav: "cart-nav",
    search: "cart-search",
    actions: "cart-header-actions",
    actionButton: "",
    dismissLabel: "Dismiss offer",
    logoHref: "/",
    links: [
      { label: "Shop", href: "/product-details", navigate: "product", icon: true },
      { label: "On Sale", href: "/category", navigate: "category" },
      { label: "New Arrivals", href: "/category", navigate: "category" },
      { label: "Brands", href: "#cart-footer" },
    ],
  },
};

export default function SiteHeader({
  page,
  onNavigateHome,
  onNavigateProduct,
  onNavigateCategory,
  onNavigateCart,
}) {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const variant = headerVariants[page];

  function handleNavigation(event, destination) {
    const navigation = {
      home: onNavigateHome,
      product: onNavigateProduct,
      category: onNavigateCategory,
      cart: onNavigateCart,
    }[destination];

    if (!navigation) return;
    event.preventDefault();
    navigation();
  }

  return (
    <>
      {announcementVisible && (
        <div className={variant.announcement}>
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#newsletter">Sign Up Now</a>
          </p>
          <button
            type="button"
            aria-label={variant.dismissLabel}
            onClick={() => setAnnouncementVisible(false)}
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>
      )}
      <header className={variant.header}>
        <a
          className={variant.logo}
          href={variant.logoHref}
          onClick={(event) =>
            variant.logoHref === "/" && handleNavigation(event, "home")
          }
          aria-label="Shop.co home"
        >
          SHOP.CO
        </a>
        <nav className={variant.nav} aria-label="Main navigation">
          {variant.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.current ? "page" : undefined}
              onClick={(event) => handleNavigation(event, link.navigate)}
            >
              {link.label}
              {link.icon && <img src={chevronIcon} alt="" />}
            </a>
          ))}
        </nav>
        <label className={variant.search}>
          <img src={searchIcon} alt="" />
          <input
            type="search"
            placeholder="Search for products..."
            aria-label="Search products"
          />
        </label>
        <div className={variant.actions}>
          <button
            className={variant.actionButton || undefined}
            type="button"
            aria-label="Shopping cart"
            aria-current={page === "cart" ? "page" : undefined}
            onClick={onNavigateCart}
          >
            <img src={cartIcon} alt="" />
          </button>
          <button
            className={variant.actionButton || undefined}
            type="button"
            aria-label="Account"
          >
            <img src={accountIcon} alt="" />
          </button>
        </div>
      </header>
    </>
  );
}
