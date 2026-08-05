"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import featuredProducts from "@/data/featuredProductData";

import ProductGallery from "./components/productgallery/ProductGallery";
import ColorSelector from "./components/colorselector/ColorSelector";

import styles from "./productdetail.module.css";

const ProductDetail = () => {
  const { slug } = useParams();

  const product = featuredProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]
  );

  return (
    <div className={`container ${styles.productWrapper}`}>
  <div className={styles.left}>
    <ProductGallery images={selectedColor.images} />
  </div>

  <div className={styles.right}>
    <h2>{product.name}</h2>
    <h3>₹{product.price}</h3>

    <ColorSelector
      colors={product.colors}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
    />
  </div>
</div>
  );
};

export default ProductDetail;