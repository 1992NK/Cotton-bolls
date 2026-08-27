"use client";

import Image from "next/image";
import styles from "./comboproducts.module.css";

const ComboCard = ({
  item,
  product,
  selectedCombo,
  setSelectedCombo,
}) => {
  const productPrice = Number(product?.price || 0);
  const itemPrice = Number(item?.price || 0);
  const comboTotal = productPrice + itemPrice;

  const handleAddCombo = () => {
    if (!product || !item) return;

    setSelectedCombo(item.id);

    const combo = {
      mainProduct: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images?.[0],
      },
      comboProduct: item,
      comboTotal,
    };

    console.log("Combo Product:", combo);
  };

  if (!item) return null;

  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
        />

        <span className={styles.discount}>
          {item.discount}% off
        </span>
      </div>

      <div className={styles.content}>
        <p className={styles.comboLabel}>
          COMBO PRODUCT
        </p>

        <h3 className={styles.title}>
          {item.title}
        </h3>

        <div className={styles.priceRow}>
          <span className={styles.price}>
            ₹{item.price}
          </span>

          <span className={styles.oldPrice}>
            ₹{item.oldPrice}
          </span>

          <span className={styles.offer}>
            {item.discount}% OFF
          </span>
        </div>

        <div className={styles.comboTotal}>
          <span>With this T-shirt</span>

          <p>
            Combo Total:
            <strong> ₹{comboTotal}</strong>
          </p>
        </div>

        <button
          type="button"
          className={`${styles.addButton} ${
            selectedCombo === item.id
              ? styles.addedButton
              : ""
          }`}
          onClick={handleAddCombo}
          disabled={!product}
        >
          {selectedCombo === item.id
            ? "ADDED TO COMBO"
            : "ADD WITH T-SHIRT"}
        </button>
      </div>
    </div>
  );
};

export default ComboCard;