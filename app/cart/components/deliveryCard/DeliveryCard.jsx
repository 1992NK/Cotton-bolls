"use client";

import { useState } from "react";
import styles from "./deliverycard.module.css";
import { IoLocationSharp, IoChevronDown } from "react-icons/io5";
import DeliveryPincodeModal from "../deliveryPincodeModal/DeliveryPincodeModal";

const DeliveryCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCheck = (pincode) => {
    console.log("Selected Pincode:", pincode);
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        className={styles.deliveryCard}
        onClick={() => setShowModal(true)}
      >
        <IoLocationSharp />

        <div className={styles.deliveryText}>
          <span>Delivering to:</span>
          <strong>110018</strong>
        </div>

        <IoChevronDown className={styles.arrow} />
      </button>

      <DeliveryPincodeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCheck={handleCheck}
      />
    </>
  );
};

export default DeliveryCard;