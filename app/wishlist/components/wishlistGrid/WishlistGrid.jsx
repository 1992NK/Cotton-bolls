"use client";

import styles from "./wishlistGrid.module.css";

import WishlistCard from "../wishlistCard/WishlistCard";

const WishlistGrid = ({
  products,
  onRemove,
  onAddToBag,
}) => {
  return (
    <div className={styles.productGrid}>

      {products.map((product) => (
        <WishlistCard
          key={product.id}
          product={product}
          onRemove={onRemove}
          onAddToBag={onAddToBag}
        />
      ))}

    </div>
  );
};

export default WishlistGrid;