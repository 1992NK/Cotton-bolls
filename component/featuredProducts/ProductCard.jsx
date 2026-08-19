"use client";

import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import styles from "./featuredProduct.module.css";

const ProductCard = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [hover, setHover] = useState(false);
  const [fade, setFade] = useState(false);

  const changeImage = (index) => {
    if (index === activeImage) return;

    setFade(true);

    setTimeout(() => {
      setActiveImage(index);
      setFade(false);
    }, 150);
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActiveImage(0);
      }}
    >
      <div className={styles.imageBox}>
        {product.discount && (
          <span className={styles.badge}>{product.discount}% off</span>
        )}

        <div
          className={`${styles.actions} ${hover ? styles.showActions : ""
            }`}
        >
          <button className={styles.iconBtn}>
            <FaHeart />
          </button>

          <button className={styles.iconBtn}>
            <FaShoppingCart />
          </button>
        </div>

        <div
          className={`${styles.imageWrapper} ${fade ? styles.fade : ""
            }`}
        >
          <Image
            src={
              product.images
                ? product.images[activeImage]
                : product.image
            }
            alt={product.title}
            fill
            className={styles.productImage}
          />
        </div>

        {hover &&
          product.images &&
          product.images.length > 1 && (
            <div className={styles.sliderDots}>
              {product.images.map((img, index) => (
                <span
                  key={index}
                  className={
                    activeImage === index
                      ? styles.activeDot
                      : ""
                  }
                  onMouseEnter={() => changeImage(index)}
                />
              ))}
            </div>
          )}
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{product.category}</p>

        <h3>{product.title}</h3>

        <div className={styles.price}>
          <span className={styles.newPrice}>
            <FaRupeeSign />{product.price}
          </span>

          {product.oldPrice && (
            <span className={styles.oldPrice}>
              <FaRupeeSign />{product.oldPrice}
            </span>
          )}
        </div>

        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;