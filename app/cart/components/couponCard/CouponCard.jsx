"use client";

import styles from "./couponcard.module.css";
import { FiChevronRight } from "react-icons/fi";

const CouponCard = () => {
  return (
    <div className={styles.offerouter}>
      <div className={styles.offerLabel}>Best offer for you</div>

      <div className={styles.offerContent}>
        <div className={styles.offerText}>
          <strong>FREEDOM100</strong>
          <span>- Add items worth</span>
          <b>₹350</b>
          <span>to save upto</span>
          <b>₹100</b>
        </div>

        <button type="button" className={styles.addItemButton}>
          Add Item
        </button>
      </div>

      <button type="button" className={styles.moreCoupons}>
        <span>Apply More Coupons/Gift Cards</span>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default CouponCard;