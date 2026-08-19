"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./headericon.module.css";
import {
  FaRegUser,
  FaRegHeart,
  FaShoppingBag,
} from "react-icons/fa";

export default function HeaderIcons() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Dropdown ke bahar click karne par close
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.headerIcons}>

      {/* USER */}
      <div
        className={styles.userIconWrapper}
        ref={userMenuRef}
      >
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          aria-label="User menu"
        >
          <FaRegUser />
        </button>

        {/* USER DROPDOWN */}
        {isUserMenuOpen && (
          <div className={styles.userDropdown}>

            <div
              className={styles.dropdownItem}
              onClick={() => setIsUserMenuOpen(false)}
            >
              Orders
            </div>

            <div
              className={styles.dropdownItem}
              onClick={() => setIsUserMenuOpen(false)}
            >
              Saved Address
            </div>

            <div
              className={styles.dropdownItem}
              onClick={() => setIsUserMenuOpen(false)}
            >
              Gift Vouchers
            </div>

            <div
              className={styles.dropdownItem}
              onClick={() => setIsUserMenuOpen(false)}
            >
              CB Money
            </div>

            <div
              className={styles.dropdownItem}
              onClick={() => setIsUserMenuOpen(false)}
            >
              CB Points
            </div>

            <div
              className={styles.dropdownItem}
              onClick={() => setIsUserMenuOpen(false)}
            >
              Profile
            </div>

            <div
              className={styles.dropdownItem}
              onClick={() => setIsUserMenuOpen(false)}
            >
              FAQs
            </div>

            <div
              className={styles.dropdownItem}
              onClick={() => setIsUserMenuOpen(false)}
            >
              Contact Us
            </div>

            <div
              className={`${styles.dropdownItem} ${styles.logoutItem}`}
              onClick={() => {
                setIsUserMenuOpen(false);

                // Yahan logout function lagana hai
                console.log("Logout");
              }}
            >
              Logout
            </div>

          </div>
        )}
      </div>

      {/* WISHLIST */}
      <div className={styles.iconWrapper}>
        <FaRegHeart />
      </div>

      {/* CART */}
      <div className={styles.cartWrapper}>
        <FaShoppingBag />

        <span className={styles.cartCount}>
          2
        </span>
      </div>

    </div>
  );
}