"use client";

import { useState } from "react";
import styles from "./deliverypincodemodal.module.css";
import { IoCloseOutline } from "react-icons/io5";

const DeliveryPincodeModal = ({ isOpen, onClose, onCheck }) => {
  const [pincode, setPincode] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleCheck = () => {
    if (!pincode.trim()) {
      return;
    }

    if (onCheck) {
      onCheck(pincode);
    }
  };

  return (
    <div className={styles.overlay}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pincode-title"
      >
        <div className={styles.header}>
          <h2 id="pincode-title">Enter Delivery Pincode</h2>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <IoCloseOutline />
          </button>
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={pincode}
            onChange={(e) => {
              const value = e.target.value
                .replace(/\D/g, "")
                .slice(0, 6);

              setPincode(value);
            }}
            placeholder="110018"
            maxLength={6}
            inputMode="numeric"
          />

          <button
            type="button"
            className={styles.checkButton}
            onClick={handleCheck}
          >
            CHECK
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPincodeModal;