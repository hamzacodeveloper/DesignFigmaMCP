import arrivalTee from "../assets/figma/imgImage7.png";
import arrivalJeans from "../assets/figma/imgImage8.png";
import arrivalShirt from "../assets/figma/imgImage9.png";
import arrivalStripeTee from "../assets/figma/imgImage10.png";
import sellingShirt from "../assets/figma/imgImage11.png";
import sellingGraphicTee from "../assets/figma/imgImage12.png";
import sellingShorts from "../assets/figma/imgImage13.png";
import sellingJeans from "../assets/figma/imgImage14.png";
import casualImage from "../assets/figma/imgImage15.png";
import gymImage from "../assets/figma/imgImage16.png";
import formalImage from "../assets/figma/imgImage17.png";
import partyImage from "../assets/figma/imgImage18.png";
import versaceLogo from "../assets/figma/imgGroup.svg";
import zaraLogo from "../assets/figma/imgZaraLogo11.svg";
import gucciLogo from "../assets/figma/imgGucciLogo11.svg";
import pradaLogo from "../assets/figma/imgGroup1.svg";
import calvinKleinLogo from "../assets/figma/imgGroup2.svg";
import ratingStars from "../assets/figma/imgFrame10.svg";
import reviewStars from "../assets/figma/imgFrame15.svg";
import verifiedIcon from "../assets/figma/imgFrame5.svg";
import visaBadge from "../assets/figma/imgBadge.svg";
import mastercardBadge from "../assets/figma/imgBadge1.svg";
import paypalBadge from "../assets/figma/imgBadge2.svg";
import applePayBadge from "../assets/figma/imgBadge3.svg";
import gpayBadge from "../assets/figma/imgBadge4.svg";

export const homeProducts = {
  newArrivals: [
    { name: "T-shirt with Tape Details", price: "$120", image: arrivalTee, rating: "4.5/5" },
    { name: "Skinny Fit Jeans", price: "$240", oldPrice: "$260", discount: "-20%", image: arrivalJeans, rating: "3.5/5" },
    { name: "Checkered Shirt", price: "$180", image: arrivalShirt, rating: "4.5/5" },
    { name: "Sleeve Striped T-shirt", price: "$130", oldPrice: "$160", discount: "-30%", image: arrivalStripeTee, rating: "4.5/5" },
  ],
  topSelling: [
    { name: "Vertical Striped Shirt", price: "$212", oldPrice: "$232", discount: "-20%", image: sellingShirt, rating: "5.0/5" },
    { name: "Courage Graphic T-shirt", price: "$145", image: sellingGraphicTee, rating: "4.0/5" },
    { name: "Loose Fit Bermuda Shorts", price: "$80", image: sellingShorts, rating: "3.0/5" },
    { name: "Faded Skinny Jeans", price: "$210", image: sellingJeans, rating: "4.5/5" },
  ],
};

export const styleCategories = [
  { name: "Casual", image: casualImage, className: "category-casual" },
  { name: "Formal", image: formalImage, className: "category-formal" },
  { name: "Party", image: partyImage, className: "category-party" },
  { name: "Gym", image: gymImage, className: "category-gym" },
];

export const homeReviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon this store. The selection is diverse and right on trend.",
  },
];

export const homeAssets = {
  brands: [
    { name: "Versace", image: versaceLogo },
    { name: "Zara", image: zaraLogo },
    { name: "Gucci", image: gucciLogo },
    { name: "Prada", image: pradaLogo },
    { name: "Calvin Klein", image: calvinKleinLogo },
  ],
  ratingStars,
  reviewStars,
  verifiedIcon,
  paymentMethods: [
    { name: "Visa", image: visaBadge },
    { name: "Mastercard", image: mastercardBadge },
    { name: "PayPal", image: paypalBadge },
    { name: "Apple Pay", image: applePayBadge },
    { name: "Google Pay", image: gpayBadge },
  ],
};
