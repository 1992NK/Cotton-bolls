"use client";

import { FiTrash2 } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import styles from "./wishlistCard.module.css";

const WishlistCard = ({
  product,
  onRemove,
  onAddToBag,
}) => {
  const productImage = product.images?.[0];

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        {productImage && (
          <img
            src={productImage?.src || productImage}
            alt={product.title || "Product"}
            className={styles.productImage}
          />
        )}

        <span className={styles.fitBadge}>
          {product.category || "REGULAR FIT"}
        </span>

        <div className={styles.rating}>
          <span className={styles.star}>
            <FaStar />
          </span>
          <span>{product.rating || "0.0"}</span>
        </div>
      </div>

      <div className={styles.productDetails}>
        <div className={styles.brand}>
          {product.brand || "Cotton Bolls"}
        </div>

        <div
          className={styles.productName}
          title={product.title}
        >
          {product.title}
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className={styles.oldPrice}>
              ₹{product.oldPrice}
            </span>
          )}

          {product.discount && (
            <span className={styles.discount}>
              {product.discount}% off
            </span>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={() => onRemove(product.id)}
          aria-label="Remove from wishlist"
        >
          <FiTrash2 size={17} />
        </button>

        <button
          type="button"
          className={styles.addBagBtn}
          onClick={() => onAddToBag(product)}
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;