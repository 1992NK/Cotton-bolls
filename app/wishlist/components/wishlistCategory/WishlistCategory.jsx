"use client";

import styles from "./wishlistCategory.module.css";

const WishlistCategory = () => {
  return (
    <div className={styles.categoryWrapper}>
      <button
        type="button"
        className={styles.categoryBtn}
      >
        T-Shirt
      </button>
    </div>
  );
};

export default WishlistCategory;