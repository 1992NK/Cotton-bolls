"use client";

import styles from "../orderSuccess.module.css";

export default function OrderSummary({
  totalAmount,
  paymentMethod,
  phone,
  arrivingBy,
  address,
}) {
  return (
    <section className={styles.summaryOuter}>

      <div className={styles.summaryBox}>

        <div className={styles.summaryTop}>

          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>
              TOTAL AMOUNT:
            </span>

            <span className={styles.summaryValue}>
              {totalAmount}
            </span>
          </div>

          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>
              PAYMENT METHOD:
            </span>

            <span className={styles.summaryValue}>
              {paymentMethod}
            </span>
          </div>

          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>
              PHONE NO:
            </span>

            <span className={styles.summaryValue}>
              {phone}
            </span>
          </div>

          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>
              ARRIVING BY:
            </span>

            <span className={styles.summaryValue}>
              {arrivingBy}
            </span>
          </div>

        </div>

        <div className={styles.addressRow}>

          <span className={styles.summaryLabel}>
            ADDRESS:
          </span>

          <span className={styles.summaryValue}>
            {address}
          </span>

        </div>

      </div>

    </section>
  );
}