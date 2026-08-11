"use client";

import { useState } from "react";
import styles from "./pricesummary.module.css";
import { IoChevronUpOutline } from "react-icons/io5";
import ProceedButton from "../proceedButton/ProceedButton";

const PriceSummary = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
  <div className={styles.priceSummary}>
    <button
      type="button"
      className={styles.summaryHeader}
      onClick={handleToggle}
      aria-expanded={isOpen}
    >
      <span>Price Summary</span>

      <IoChevronUpOutline
        className={`${styles.arrow} ${
          !isOpen ? styles.arrowClosed : ""
        }`}
      />
    </button>

    <div className={styles.totalRow}>
      <span>Total</span>
      <strong>₹649</strong>
    </div>

    <div
      className={`${styles.detailsWrapper} ${
        isOpen ? styles.detailsOpen : styles.detailsClosed
      }`}
    >
      <div className={styles.details}>
        <div className={styles.divider}></div>

        <div className={styles.priceRow}>
          <span>Total MRP (Incl. of taxes)</span>
          <span>₹1,799</span>
        </div>

        <div className={styles.priceRow}>
          <span>Bag Discount (Incl. of GST Benefit)</span>
          <span className={styles.greenText}>-₹1,150</span>
        </div>

        <div className={styles.priceRow}>
          <span>Delivery Fee</span>
          <span className={styles.greenText}>Free</span>
        </div>
      </div>
    </div>

    <div className={styles.freeDelivery}>
      <span>
        Yayy! You get <strong>FREE delivery</strong> on this order
      </span>
    </div>

    <div className={styles.proceedArea}>
      <ProceedButton />
    </div>
  </div>
);
};

export default PriceSummary;