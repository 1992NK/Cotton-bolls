"use client";

import Image from "next/image";
import styles from "./removecartmodal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const RemoveCartModal = ({
  product,
  onClose,
  onRemove,
  onSaveLater,
}) => {
  if (!product) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Clear From Bag</h2>

          <button
            type="button"
            className={styles.headerClose}
            onClick={onClose}
            aria-label="Close"
          >
            <IoCloseOutline />
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.question}>
            Are you sure you want to remove this item from bag?
          </p>

          <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.selectedImage}
                alt={product.title || "Product"}
                fill
                sizes="120px"
                className={styles.productImage}
              />
            </div>

            <div className={styles.productInfo}>
              {/* <h3 className={styles.productTitle}>
                cotton bolls
              </h3> */}

              <p className={styles.productName}>
                {product.name ||
                  "Men's Fog Green Wilderness Graphic Printed T-shirt"}
              </p>

              <div className={styles.offer}>
                <MdLocalOffer />
                <span>Buy 3 for 1199 offer applicable</span>
              </div>

              <div className={styles.delivery}>
                <FaCheckCircle />
                <span>
                  Get it by <strong>Tomorrow</strong>
                </span>
              </div>
            </div>

            <div className={styles.priceBox}>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>₹474</span>
                <span className={styles.oldPrice}>₹1,399</span>
              </div>

              <div className={styles.saved}>You saved ₹925</div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button
            type="button"
            className={styles.removeButton}
            onClick={() => onRemove(product.id)}
          >
            REMOVE
          </button>

          <button
            type="button"
            className={styles.saveButton}
            onClick={() => onSaveLater(product)}
          >
            SAVE FOR LATER
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveCartModal;