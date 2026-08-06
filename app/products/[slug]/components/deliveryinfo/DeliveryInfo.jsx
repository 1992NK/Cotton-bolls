"use client";
import { useState } from "react";

import styles from './deliveryinfo.module.css'


import { FiTruck } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const DeliveryInfo = () => {
      const [pincode, setPincode] = useState("");

  const handleChange = (e) => {
    // Sirf numbers allow honge
    const value = e.target.value.replace(/\D/g, "");
    setPincode(value);
  };

  const handleCheck = () => {
    if (pincode.length !== 6) {
      alert("Please enter a valid 6-digit pincode");
      return;
    }

    alert(`Checking delivery for ${pincode}`);

    // Future API Call
    // console.log(pincode);
  };

   return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Check for Delivery Details</h3>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={handleChange}
          maxLength={6}
        />

        <button onClick={handleCheck}>Check</button>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <FiTruck size={15} />
        </div>

        <div>
          <h4>
            Expected delivery by <span>tomorrow</span>
          </h4>

          <p>Final delivery based on items in bag</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <FiCreditCard size={15} />
        </div>

        <div>
          <h4>Cash on Delivery is available</h4>
        </div>
      </div>

      <div className={styles.shipping}>
        <HiOutlineLocationMarker size={18} />

        <span>
          This product is eligible for <strong>FREE SHIPPING</strong>
        </span>
      </div>
    </div>
  );
}

export default DeliveryInfo;