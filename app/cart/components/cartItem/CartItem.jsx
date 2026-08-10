"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./cartitem.module.css";

import { IoCloseOutline } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

import RemoveCartModal from "../removeCartModal/RemoveCartModal";


export default function CartItem({ product, onRemove }) {

  const [showRemoveModal, setShowRemoveModal] = useState(false);


  /* =========================
     OPEN REMOVE MODAL
  ========================= */

  const handleCloseClick = () => {
    setShowRemoveModal(true);
  };


  /* =========================
     REMOVE PRODUCT
  ========================= */

  const handleRemove = (id) => {

    setShowRemoveModal(false);

    onRemove(id);
  };


  /* =========================
     SAVE FOR LATER
  ========================= */

  const handleSaveLater = (product) => {

    console.log("Save for later:", product);

    setShowRemoveModal(false);
  };


  return (
    <>
      <div className={styles.card}>

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className={styles.left}>

          {/* Product Image */}

          <div className={styles.imageWrapper}>

            <Image
              src={product.selectedImage}
              alt={product.title || "Product"}
              fill
              sizes="150px"
              className={styles.image}
            />

          </div>


          {/* Product Info */}

          <div className={styles.info}>

            {/* Title */}

            <h4 className={styles.title}>
              {product.title}
            </h4>


            {/* Offer */}

            <div className={styles.offer}>

              <MdLocalOffer />

              <span>
                Buy 3 for 1199 offer applicable
              </span>

            </div>


            {/* Delivery */}

            <div className={styles.delivery}>

              <FaTruck />

              <span>
                Get it in <strong>2 days</strong>
              </span>

            </div>


            {/* Size & Qty */}

            <div className={styles.optionRow}>

              <div className={styles.optionBox}>

                <label>
                  Size
                </label>

                <select defaultValue={product.size || "S"}>

                  <option value="S">
                    S
                  </option>

                  <option value="M">
                    M
                  </option>

                  <option value="L">
                    L
                  </option>

                  <option value="XL">
                    XL
                  </option>

                  <option value="XXL">
                    XXL
                  </option>

                </select>

              </div>


              <div className={styles.optionBox}>

                <label>
                  Qty
                </label>

                <select defaultValue={product.quantity || 1}>

                  <option value="1">
                    1
                  </option>

                  <option value="2">
                    2
                  </option>

                  <option value="3">
                    3
                  </option>

                  <option value="4">
                    4
                  </option>

                  <option value="5">
                    5
                  </option>

                </select>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className={styles.priceBox}>

          {/* Close */}

          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleCloseClick}
            aria-label="Remove product"
          >

            <IoCloseOutline />

          </button>


          {/* Price */}

          <div className={styles.priceRow}>

            <span className={styles.currentPrice}>
              ₹439
            </span>

            <span className={styles.oldPrice}>
              ₹949
            </span>

          </div>


          {/* Saving */}

          <div className={styles.savedText}>
            You saved ₹510
          </div>

        </div>

      </div>


      {/* =========================
          REMOVE MODAL
      ========================= */}

      {showRemoveModal && (

        <RemoveCartModal
          product={product}
          onClose={() => setShowRemoveModal(false)}
          onRemove={handleRemove}
          onSaveLater={handleSaveLater}
        />

      )}

    </>
  );
}