import FooterColumn from "../FooterColumn.jsx";
import { footerColumns } from "../../data/footerNavigation.js";
import {
  categoryPaymentMethods,
} from "../../data/category.js";
import twitterIcon from "../../assets/figma-category/imgGroup.svg";
import facebookIcon from "../../assets/figma-category/imgGroup1.svg";
import instagramIcon from "../../assets/figma-category/imgGroup2.svg";
import githubIcon from "../../assets/figma-category/imgGroup3.svg";

export default function CategoryFooter({ onNavigateHome }) {
  return (
    <footer className="category-footer" id="footer">
      <div className="category-footer-main category-width">
        <div className="category-footer-about">
          <a
            className="category-wordmark"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onNavigateHome();
            }}
          >
            SHOP.CO
          </a>
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
  );
}
