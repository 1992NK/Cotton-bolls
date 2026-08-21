"use client";

import styles from "./wishlistHeader.module.css";

const WishlistHeader = ({
  itemCount,
}) => {
  return (
    <div className={styles.heading}>
      <h1>My Wishlist</h1>

      <span>
        {itemCount}{" "}
        {itemCount === 1
          ? "Item"
          : "Items"}
      </span>
    </div>
  );
};

export default WishlistHeader;