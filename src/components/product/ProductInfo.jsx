import minusIcon from "../../assets/figma-product/imgFrame5.svg";
import plusIcon from "../../assets/figma-product/imgFrame6.svg";
import { productAssets } from "../../data/productDetails.js";

export default function ProductInfo({
  product,
  selectedColor,
  selectedSize,
  quantity,
  addedToCart,
  onSelectColor,
  onSelectSize,
  onQuantityChange,
  onAddToCart,
}) {
  return (
    <div className="pd-product-info">
      <h1 className="pd-display" id="pd-product-title">{product.name}</h1>
      <div className="pd-product-rating">
        <img src={productAssets.productStars} alt={`${product.rating} stars`} />
        <span>{product.rating.split("/")[0]}/<span>5</span></span>
      </div>
      <div className="pd-price">
        <strong>{product.price}</strong>
        <del>{product.previousPrice}</del>
        <span className="pd-sale">{product.discount}</span>
      </div>
      <p className="pd-description">{product.description}</p>
      <fieldset className="pd-choice-group pd-color-group">
        <legend>Select Colors</legend>
        <div className="pd-color-options">
          {product.colors.map((color) => (
            <button
              className={selectedColor === color ? "is-selected" : ""}
              key={color}
              type="button"
              style={{ "--swatch-color": color }}
              aria-label={`Select color ${color}`}
              aria-pressed={selectedColor === color}
              onClick={() => onSelectColor(color)}
            >
              {selectedColor === color && <span aria-hidden="true">✓</span>}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset className="pd-choice-group pd-size-group">
        <legend>Choose Size</legend>
        <div className="pd-size-options">
          {product.sizes.map((size) => (
            <button
              className={selectedSize === size ? "is-selected" : ""}
              key={size}
              type="button"
              aria-pressed={selectedSize === size}
              onClick={() => onSelectSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="pd-cart-actions">
        <div className="pd-quantity" aria-label="Quantity">
          <button type="button" aria-label="Decrease quantity" onClick={() => onQuantityChange(Math.max(1, quantity - 1))}>
            <img src={minusIcon} alt="" />
          </button>
          <span aria-live="polite">{quantity}</span>
          <button type="button" aria-label="Increase quantity" onClick={() => onQuantityChange(quantity + 1)}>
            <img src={plusIcon} alt="" />
          </button>
        </div>
        <button className="pd-add-button" type="button" onClick={onAddToCart}>
          {addedToCart ? `Added ${quantity} to Cart` : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
