import womenImage from "@/assets/images/promo/women.webp";
import menImage from "@/assets/images/promo/men.webp";
import sliperImage from "@/assets/images/promo/sliper.jpg";

const promoData = [
  {
    id: 1,
    size: "large",
    title: "Big patterns are back in fashion",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    image: womenImage,
    bgColor: "#ede9e6",
  },

  {
    id: 2,
    size: "small",
    title: "Show your fashion style",
    subtitle: "Don't miss the opportunity.",
    image: menImage,
    bgColor: "#f5f5f5",
  },

  {
    id: 3,
    size: "small",
    title: "Show your fashion style",
    subtitle: "New arrivals available now.",
    image: sliperImage,
    bgColor: "#f7dedd",
  },
];

export default promoData;