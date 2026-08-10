"use client";

import styles from "./features.module.css";
import { MdVerified } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <MdVerified className={styles.icon} />
        <span>
          QUALITY
          <br />
          ASSURANCE
        </span>
      </div>

      <div className={styles.feature}>
        <FaCartShopping className={styles.icon} />
        <span>
          100% SECURE
          <br />
          PAYMENT
        </span>
      </div>

      <div className={styles.feature}>
        <FaBoxOpen className={styles.icon} />
        <span>
          EASY RETURNS &
          <br />
          INSTANT REFUNDS
        </span>
      </div>
    </div>
  );
};

export default Features;