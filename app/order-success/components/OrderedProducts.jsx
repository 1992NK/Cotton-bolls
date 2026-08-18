"use client";

import Image from "next/image";

import styles from "../orderSuccess.module.css";

export default function OrderedProducts({ products }) {
  return (
    <section className={styles.productsSection}>

      <div className={styles.productsGrid}>

        {products.map((product) => (
          <div
            className={styles.productItem}
            key={product.id}
          >

            {/* Product Image */}
            <div className={styles.productImageWrapper}>

              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="120px"
                className={styles.productImage}
              />

            </div>

            {/* Product Details */}
            <div className={styles.productDetails}>

              <h2 className={styles.productName}>
                {product.name}
              </h2>

              <p className={styles.productCategory}>
                <strong>Category:</strong>{" "}
                {product.category}
              </p>

              <p className={styles.productMeta}>
                <strong>Qty:</strong> {product.quantity}
                {" | "}
                <strong>Size:</strong> {product.size}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}