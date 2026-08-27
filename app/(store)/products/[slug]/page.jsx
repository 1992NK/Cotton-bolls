"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import featuredProducts from "@/data/featuredProductData";

import Breadcrumbs from "../component/common/breadcrumbs/Breadcrumbs";
import ProductGallery from "./components/productgallery/ProductGallery";
import ProductInfo from "./components/productinfo/ProductInfo";
import ComboProducts from "./components/productCombo/ComboProducts";
import SimilarProducts from "./components/similarProduct/SimilarProducts";

import styles from "./productdetail.module.css";

const ProductDetail = () => {
  const { slug } = useParams();

  const product = featuredProducts.find(
    (item) => item.slug === slug
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || null
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Clothing",
      href: "/products?category=clothing",
    },
    {
      label: "Men T-Shirts",
    },
  ];

  return (
    <>
      <div className="container">
        <Breadcrumbs items={breadcrumb} />
      </div>

      <div className="container">
        <div className={styles.productWrapper}>
          <div className={styles.left}>
            <ProductGallery
              images={
                selectedColor?.images || product.images
              }
            />
          </div>

          <div className={styles.right}>
            <ProductInfo
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <ComboProducts product={product} />
      </div>

      <SimilarProducts currentProduct={product} />
    </>
  );
};

export default ProductDetail;