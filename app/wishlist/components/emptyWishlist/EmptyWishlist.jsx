"use client";

import styles from "./emptyWishlist.module.css";
import { CiHeart } from "react-icons/ci";

const EmptyWishlist = () => {
  return (
    <div
      className={
        styles.emptyWishlist
      }
    >

      <div
        className={
          styles.emptyIcon
        }
      >
        <CiHeart />
      </div>

      <h2>
        Your Wishlist is Empty
      </h2>

      <p>
        Save your favorite products
        here and buy them later.
      </p>

    </div>
  );
};

export default EmptyWishlist;