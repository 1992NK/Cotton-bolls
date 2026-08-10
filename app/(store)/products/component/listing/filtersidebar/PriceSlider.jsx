"use client";
import { useState } from "react";
import styles from './filterSidebar.module.css'
import { FaCaretDown   } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
const PriceSlider = () => {
     const [open, setOpen] = useState(true);

  return (
    <div className={styles.section}>
      <div
        className={styles.heading}
        onClick={() => setOpen(!open)}
      >
        <span>Price</span>

        <span
          className={`${styles.arrow} ${
            open ? styles.rotate : ""
          }`}
        >
          <FaCaretDown size={15} />
        </span>
      </div>

      <div
        className={`${styles.content} ${
          open ? styles.open : styles.close
        }`}
      >
        <div className={styles.priceRow}>
          <div className={styles.inputBox}>
            <span><FaIndianRupeeSign size={15} /></span>
            <input type="number" placeholder="0" />
          </div>

          <span>to</span>

          <div className={styles.inputBox}>
            <span><FaIndianRupeeSign size={15} /></span>
            <input type="number" placeholder="389" />
          </div>
        </div>

        <p className={styles.priceText}>
          The highest price is Rs. 389.00
        </p>
      </div>
    </div>
  );
}

export default PriceSlider