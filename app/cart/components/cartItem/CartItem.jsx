"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./cartitem.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import RemoveCartModal from "../removeCartModal/RemoveCartModal";

export default function CartItem({ product, onRemove }) {
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const handleCloseClick = () => {
    setShowRemoveModal(true);
  };

  const handleRemove = (id) => {
    setShowRemoveModal(false);
    onRemove(id);
  };

  const handleSaveLater = (product) => {
    console.log("Save for later:", product);
    setShowRemoveModal(false);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <Image src={product.selectedImage} alt={product.title || "Product"} fill sizes="150px" className={styles.image} />
          </div>

          <div className={styles.info}>
            <h4 className={styles.title}>{product.title}</h4>

            <div className={styles.offer}>
              <MdLocalOffer />
              <span>Buy 3 for 1199 offer applicable</span>
            </div>

            <div className={styles.delivery}>
              <FaTruck />
              <span>Get it in <strong>2 days</strong></span>
            </div>

            <div className={styles.optionRow}>
              <div className={styles.optionBox}>
                <label>Qty</label>
                <select defaultValue={product.quantity || 1}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.priceBox}>
          <button type="button" className={styles.closeBtn} onClick={handleCloseClick} aria-label="Remove product">
            <IoCloseOutline />
          </button>

          <div className={styles.priceRow}>
            <span className={styles.currentPrice}>₹439</span>
            <span className={styles.oldPrice}>₹949</span>
          </div>

          <div className={styles.savedText}>You saved ₹510</div>
        </div>
      </div>

      {showRemoveModal && (
        <RemoveCartModal
          product={product}
          onClose={() => setShowRemoveModal(false)}
          onRemove={handleRemove}
          onSaveLater={handleSaveLater}
        />
      )}
    </>
  );
}