import visaBadge from "../assets/figma/imgBadge.svg";
import mastercardBadge from "../assets/figma/imgBadge1.svg";
import paypalBadge from "../assets/figma/imgBadge2.svg";
import applePayBadge from "../assets/figma/imgBadge3.svg";
import gpayBadge from "../assets/figma/imgBadge4.svg";
import gradientTee from "../assets/figma-category/imgImage8.png";
import skinnyJeans from "../assets/figma-category/imgImage11.png";
import checkeredShirt from "../assets/figma-category/imgImage12.png";

export const initialCartItems = [
  {
    id: "gradient-tee",
    name: "Gradient Graphic T-shirt",
    color: "White",
    size: "Large",
    price: 145,
    image: gradientTee,
    quantity: 1,
  },
  {
    id: "skinny-jeans",
    name: "Skinny Fit Jeans",
    color: "Blue",
    size: "Medium",
    price: 240,
    image: skinnyJeans,
    quantity: 1,
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    color: "Red",
    size: "Medium",
    price: 180,
    image: checkeredShirt,
    quantity: 1,
  },
];

export const paymentMethods = [
  { name: "Visa", image: visaBadge },
  { name: "Mastercard", image: mastercardBadge },
  { name: "PayPal", image: paypalBadge },
  { name: "Apple Pay", image: applePayBadge },
  { name: "Google Pay", image: gpayBadge },
];
