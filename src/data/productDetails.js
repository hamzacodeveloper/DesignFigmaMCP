import productFront from "../assets/figma-product/imgImage1.png";
import productBack from "../assets/figma-product/imgImage5.png";
import productModel from "../assets/figma-product/imgImage6.png";
import relatedPolo from "../assets/figma-product/imgImage7.png";
import relatedGraphic from "../assets/figma-product/imgImage8.png";
import relatedPoloTrim from "../assets/figma-product/imgImage9.png";
import relatedStripe from "../assets/figma-product/imgImage10.png";
import poloStars from "../assets/figma-product/imgFrame11.svg";
import graphicStars from "../assets/figma-product/imgFrame12.svg";
import tippingStars from "../assets/figma-product/imgFrame13.svg";
import stripeStars from "../assets/figma-product/imgFrame14.svg";
import samanthaStars from "../assets/figma-product/imgFrame15.svg";
import ethanStars from "../assets/figma-product/imgFrame17.svg";
import liamStars from "../assets/figma-product/imgFrame18.svg";
import oliviaStars from "../assets/figma-product/imgFrame19.svg";
import productStars from "../assets/figma-product/imgFrame10.svg";
import verifiedIcon from "../assets/figma-product/imgFrame9.svg";
import moreIcon from "../assets/figma-product/imgFrame16.svg";
import mailIcon from "../assets/figma-product/imgFrame20.svg";
import twitterIcon from "../assets/figma-product/imgGroup.svg";
import facebookIcon from "../assets/figma-product/imgGroup1.svg";
import instagramIcon from "../assets/figma-product/imgGroup2.svg";
import githubIcon from "../assets/figma-product/imgGroup3.svg";
import visaBadge from "../assets/figma-product/imgBadge.svg";
import mastercardBadge from "../assets/figma-product/imgBadge1.svg";
import paypalBadge from "../assets/figma-product/imgBadge2.svg";
import applePayBadge from "../assets/figma-product/imgBadge3.svg";
import gpayBadge from "../assets/figma-product/imgBadge4.svg";

export const gallery = [
  { src: productFront, alt: "Front of the One Life graphic T-shirt" },
  { src: productBack, alt: "Back of the One Life graphic T-shirt" },
  { src: productModel, alt: "Model wearing the One Life graphic T-shirt" },
];

export const featuredProduct = {
  name: "One Life Graphic T-shirt",
  rating: "4.5/5",
  price: "$260",
  previousPrice: "$300",
  discount: "-40%",
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  colors: ["#4f5138", "#345750", "#30304d"],
  sizes: ["Small", "Medium", "Large", "X-Large"],
  reviewCount: 451,
  details:
    "Made for everyday comfort, this graphic T-shirt features a distinctive One Life print on a soft, breathable cotton-blend fabric.",
  features: ["Relaxed everyday fit", "Soft breathable fabric", "Machine washable"],
  faqs: [
    {
      question: "How does this T-shirt fit?",
      answer: "It has a comfortable, regular fit. Choose your usual size.",
    },
    {
      question: "How should I care for it?",
      answer: "Machine wash cold with similar colors and follow the garment care label.",
    },
  ],
};

export const productTabs = [
  { id: "details", label: "Product Details" },
  { id: "reviews", label: "Rating & Reviews" },
  { id: "faqs", label: "FAQs" },
];

export const relatedProducts = [
  { name: "Polo with Contrast Trims", price: "$212", previous: "$242", sale: "-20%", rating: "4.0/5", image: relatedPolo, stars: poloStars },
  { name: "Gradient Graphic T-shirt", price: "$145", rating: "3.5/5", image: relatedGraphic, stars: graphicStars },
  { name: "Polo with Tipping Details", price: "$180", rating: "4.5/5", image: relatedPoloTrim, stars: tippingStars },
  { name: "Black Striped T-shirt", price: "$120", previous: "$150", sale: "-30%", rating: "5.0/5", image: relatedStripe, stars: stripeStars },
];

export const productReviews = [
  {
    name: "Samantha D.",
    stars: samanthaStars,
    date: "August 14, 2023",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
  },
  {
    name: "Alex M.",
    stars: samanthaStars,
    date: "August 15, 2023",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being an UX/UI designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
  {
    name: "Ethan R.",
    stars: ethanStars,
    date: "August 16, 2023",
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
  },
  {
    name: "Olivia P.",
    stars: oliviaStars,
    date: "August 17, 2023",
    text: "As a UX/UI designer myself, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this shirt stand out.",
  },
  {
    name: "Liam K.",
    stars: liamStars,
    date: "August 18, 2023",
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.",
  },
  {
    name: "Ava H.",
    stars: samanthaStars,
    date: "August 19, 2023",
    text: "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make it a conversation starter.",
  },
];

export const productAssets = {
  productStars,
  verifiedIcon,
  moreIcon,
  mailIcon,
  socialLinks: [
    { name: "Twitter", image: twitterIcon },
    { name: "Facebook", image: facebookIcon },
    { name: "Instagram", image: instagramIcon },
    { name: "GitHub", image: githubIcon },
  ],
  paymentMethods: [
    { name: "Visa", image: visaBadge },
    { name: "Mastercard", image: mastercardBadge },
    { name: "PayPal", image: paypalBadge },
    { name: "Apple Pay", image: applePayBadge },
    { name: "Google Pay", image: gpayBadge },
  ],
};
