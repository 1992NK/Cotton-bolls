"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "../orderSuccess.module.css";

export default function OrderSuccessHeader({ orderId }) {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push("/products");
  };

  return (
    <section className={styles.successHeader}>

      

      {/* Success Content */}
      <div className={styles.successContent}>

        <h1 className={styles.successTitle}>
          <span>*</span> Order Placed! <span>*</span>
        </h1>

        <p className={styles.thankYou}>
          Thank you for supporting a homegrown
          <br />
          Indian brand!
        </p>

        <p className={styles.orderId}>
          ORDER ID: <strong>{orderId}</strong>
        </p>

        <button
          type="button"
          className={styles.continueButton}
          onClick={handleContinueShopping}
        >
          CONTINUE SHOPPING
        </button>

      </div>
    </section>
  );
}