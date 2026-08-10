"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import featuredProducts from "@/data/featuredProductData";

import ProductGallery from "./components/productgallery/ProductGallery";
import ProductInfo from "./components/productinfo/ProductInfo";

import styles from "./productdetail.module.css";
import Breadcrumbs from "../component/common/breadcrumbs/Breadcrumbs";
import SimilarProducts from "./components/similarProduct/SimilarProducts";

export default function ProductDetail() {
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

      <div className={`container`}>
        <Breadcrumbs items={breadcrumb} />
      </div>
      <div className={`container`}>

        <div className={styles.productWrapper}>
          <div className={styles.left}>
            <ProductGallery
              images={selectedColor.images}
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

      <SimilarProducts currentProduct={product} />

    </>

  );
}