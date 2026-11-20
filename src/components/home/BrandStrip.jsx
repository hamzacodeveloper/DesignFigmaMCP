import { homeAssets } from "../../data/home.js";

export default function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Featured brands">
      <div className="brand-row content-width">
        {homeAssets.brands.map((brand) => (
          <img key={brand.name} src={brand.image} alt={brand.name} />
        ))}
      </div>
    </section>
  );
}
