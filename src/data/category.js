import productStars1 from "../assets/figma-category/imgFrame10.svg";
import productStars2 from "../assets/figma-category/imgFrame11.svg";
import productStars3 from "../assets/figma-category/imgFrame12.svg";
import productStars4 from "../assets/figma-category/imgFrame13.svg";
import productStars5 from "../assets/figma-category/imgFrame14.svg";
import gradientTee from "../assets/figma-category/imgImage8.png";
import tippingPolo from "../assets/figma-category/imgImage9.png";
import blackStripeTee from "../assets/figma-category/imgImage10.png";
import skinnyJeans from "../assets/figma-category/imgImage11.png";
import checkeredShirt from "../assets/figma-category/imgImage12.png";
import sleeveStripeTee from "../assets/figma-category/imgImage13.png";
import verticalShirt from "../assets/figma-category/imgImage7.png";
import courageTee from "../assets/figma-category/imgImage14.png";
import bermudaShorts from "../assets/figma-category/imgImage15.png";
import visaBadge from "../assets/figma-category/imgBadge.svg";
import mastercardBadge from "../assets/figma-category/imgBadge1.svg";
import paypalBadge from "../assets/figma-category/imgBadge2.svg";
import applePayBadge from "../assets/figma-category/imgBadge3.svg";
import gpayBadge from "../assets/figma-category/imgBadge4.svg";

export const categoryProducts = [
  { name: "Gradient Graphic T-shirt", price: 145, rating: "3.5/5", image: gradientTee, stars: productStars1, type: "T-shirts", styles: ["Casual"], colors: ["white", "pink"], sizes: ["Small", "Medium", "Large"] },
  { name: "Polo with Tipping Details", price: 180, rating: "4.5/5", image: tippingPolo, stars: productStars2, type: "Shirts", styles: ["Casual"], colors: ["pink"], sizes: ["Medium", "Large", "X-Large"] },
  { name: "Black Striped T-shirt", price: 120, previous: 150, discount: "-30%", rating: "5.0/5", image: blackStripeTee, stars: productStars3, type: "T-shirts", styles: ["Casual"], colors: ["black", "white"], sizes: ["Small", "Large", "X-Large"] },
  { name: "Skinny Fit Jeans", price: 240, previous: 260, discount: "-20%", rating: "3.5/5", image: skinnyJeans, stars: productStars4, type: "Jeans", styles: ["Casual"], colors: ["blue"], sizes: ["Small", "Medium", "Large"] },
  { name: "Checkered Shirt", price: 180, rating: "4.5/5", image: checkeredShirt, stars: productStars2, type: "Shirts", styles: ["Casual"], colors: ["blue", "red"], sizes: ["Medium", "Large"] },
  { name: "Sleeve Striped T-shirt", price: 130, previous: 160, discount: "-30%", rating: "4.5/5", image: sleeveStripeTee, stars: productStars2, type: "T-shirts", styles: ["Casual"], colors: ["orange", "black"], sizes: ["Small", "Medium", "Large", "X-Large"] },
  { name: "Vertical Striped Shirt", price: 212, previous: 232, discount: "-20%", rating: "5.0/5", image: verticalShirt, stars: productStars3, type: "Shirts", styles: ["Casual"], colors: ["green"], sizes: ["Medium", "Large", "X-Large"] },
  { name: "Courage Graphic T-shirt", price: 145, rating: "4.0/5", image: courageTee, stars: productStars5, type: "T-shirts", styles: ["Casual"], colors: ["orange"], sizes: ["Small", "Medium", "Large"] },
  { name: "Loose Fit Bermuda Shorts", price: 80, rating: "3.0/5", image: bermudaShorts, stars: productStars1, type: "Shorts", styles: ["Casual"], colors: ["blue"], sizes: ["Small", "Medium", "Large"] },
];

export const productTypes = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
export const dressStyles = ["Casual", "Formal", "Party", "Gym"];
export const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
export const colors = [
  { name: "Green", value: "#08b951" },
  { name: "Olive", value: "#b4c33d" },
  { name: "Red", value: "#f40020" },
  { name: "Orange", value: "#ff7a00" },
  { name: "Yellow", value: "#ffd000" },
  { name: "Blue", value: "#1749f5" },
  { name: "Purple", value: "#7b16e8" },
  { name: "Pink", value: "#ff00a8" },
  { name: "White", value: "#fff" },
  { name: "Black", value: "#000" },
];

export const categoryPaymentMethods = [
  { name: "Visa", image: visaBadge },
  { name: "Mastercard", image: mastercardBadge },
  { name: "PayPal", image: paypalBadge },
  { name: "Apple Pay", image: applePayBadge },
  { name: "Google Pay", image: gpayBadge },
];
