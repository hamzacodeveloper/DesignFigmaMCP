# Storefront Frontend

The storefront is a React application built with Vite. It uses JavaScript/JSX, page-specific CSS, and static local assets. The app currently uses lightweight History API navigation rather than a routing library.

## Setup

From this directory:

```powershell
npm install
npm run dev
```

Vite prints the development URL when the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production bundle in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/category` | Casual product catalog and filters |
| `/product-details` | Product details, options, and reviews |
| `/cart` | Demo cart and order summary |

## Source layout

```text
src/
├── components/
│   ├── FooterColumn.jsx  # Reusable footer link column
│   └── SiteHeader.jsx    # Shared announcement and page-aware header
├── data/
│   ├── cart.js           # Initial cart items and payment methods
│   ├── category.js       # Catalog items and filter options
│   ├── footerNavigation.js
│   ├── home.js           # Home products, reviews, and visual assets
│   └── productDetails.js # Product, gallery, review, and related-product data
├── assets/               # Local images, icons, and other design assets
├── App.jsx               # Route selection and navigation callbacks
├── Home.jsx
├── CategoryPage.jsx
├── ProductDetails.jsx
└── Cart.jsx
```

Each page retains its own stylesheet and page-specific UI. `SiteHeader` uses page variants to preserve the existing header styling and navigation behavior. Shared footer link content is defined in `src/data/footerNavigation.js` and rendered with `FooterColumn`.

## Data and backend

The product catalog, reviews, and initial cart are static demo data imported from `src/data/`. Cart interactions update local React state and are not persisted. The storefront is not currently wired to the Express user API.
