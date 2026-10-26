import { useEffect, useState } from "react";
import Home from "./Home.jsx";
import ProductDetails from "./ProductDetails.jsx";
import CategoryPage from "./CategoryPage.jsx";
import Cart from "./Cart.jsx";

function currentPage() {
  const route = window.location.pathname;
  if (route === "/product-details") return "product";
  if (route === "/category") return "category";
  if (route === "/cart") return "cart";
  return "home";
}

export default function App() {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    function handlePopState() {
      setPage(currentPage());
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(path) {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setPage(currentPage());
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  if (page === "product") {
    return (
      <ProductDetails
        onNavigateHome={() => navigate("/")}
        onNavigateCategory={() => navigate("/category")}
        onNavigateCart={() => navigate("/cart")}
      />
    );
  }

  if (page === "category") {
    return (
      <CategoryPage
        onNavigateHome={() => navigate("/")}
        onNavigateProduct={() => navigate("/product-details")}
        onNavigateCategory={() => navigate("/category")}
        onNavigateCart={() => navigate("/cart")}
      />
    );
  }

  if (page === "cart") {
    return (
      <Cart
        onNavigateHome={() => navigate("/")}
        onNavigateProduct={() => navigate("/product-details")}
        onNavigateCategory={() => navigate("/category")}
        onNavigateCart={() => navigate("/cart")}
      />
    );
  }

  return (
    <Home
      onNavigateProduct={() => navigate("/product-details")}
      onNavigateCategory={() => navigate("/category")}
      onNavigateCart={() => navigate("/cart")}
    />
  );
}
