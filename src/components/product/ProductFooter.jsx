import FooterColumn from "../FooterColumn.jsx";
import { footerColumns } from "../../data/footerNavigation.js";
import { productAssets } from "../../data/productDetails.js";

export default function ProductFooter() {
  return (
    <footer className="pd-footer" id="footer">
      <div className="pd-footer-main pd-width">
        <div className="pd-footer-about">
          <a className="pd-wordmark" href="#">SHOP.CO</a>
          <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className="pd-socials">
            {productAssets.socialLinks.map((social) => (
              <a key={social.name} href="#footer" aria-label={social.name}>
                <img src={social.image} alt="" />
              </a>
            ))}
          </div>
        </div>
        {footerColumns.map((column) => (
          <FooterColumn
            key={column.title}
            {...column}
            className="pd-footer-column"
            heading="h3"
          />
        ))}
      </div>
      <div className="pd-footer-bottom pd-width">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="pd-payment-methods" aria-label="Accepted payment methods">
          {productAssets.paymentMethods.map((method) => (
            <img key={method.name} src={method.image} alt={method.name} />
          ))}
        </div>
      </div>
    </footer>
  );
}
