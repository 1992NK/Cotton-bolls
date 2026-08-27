"use client";

import { useState } from "react";
import { FiCopy, FiChevronRight } from "react-icons/fi";
import styles from "./couponOffer.module.css";

const offers = [
  {
    id: 1,
    title: "Get FLAT ₹100 OFF on all Prepaid orders above Rs.1,299.",
    code: "PREPAID100",
    type: "coupon",
  },
  {
    id: 2,
    title: "Buy 3 for 1199",
    text: "Auto applied offer",
    type: "auto",
  },
];

const CouponOffers = () => {
  const [copied, setCopied] = useState("");

  const copyCode = async (code) => {
    await navigator.clipboard.writeText(code);
    setCopied(code);

    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className={styles.offersSection}>
      <h3 className={styles.heading}>Save extra with these offers</h3>

      <div className={styles.offers}>
        {offers.map((offer) => (
          <div className={styles.offerCard} key={offer.id}>
            <div className={styles.offerTop}>
              <span className={styles.icon}>🎁</span>
              <p className={styles.title}>{offer.title}</p>
            </div>

            <div className={styles.divider} />

            {offer.type === "coupon" ? (
              <div className={styles.offerBottom}>
                <span className={styles.code}>{offer.code}</span>

                <button
                  className={styles.copyButton}
                  onClick={() => copyCode(offer.code)}
                >
                  {copied === offer.code ? "Copied" : "Copy code"}
                  <FiCopy />
                </button>
              </div>
            ) : (
              <div className={styles.offerBottom}>
                <span className={styles.autoText}>{offer.text}</span>

                <button className={styles.viewButton}>
                  View all items
                  <FiChevronRight />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponOffers;