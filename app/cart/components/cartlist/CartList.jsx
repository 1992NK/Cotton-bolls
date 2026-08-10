"use client";

import Image from "next/image";
import styles from "./cartlist.module.css";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FiTag } from "react-icons/fi";
import CartItem from "../cartItem/CartItem";

const CartList = ({ cartItems = [], onRemove }) => {
  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyCartImage}>
          <Image
            src="/images/empty-cart.png"
            alt="Empty Cart"
            width={180}
            height={180}
          />
        </div>

        <h2 className={styles.emptyCartTitle}>
          Hey, your bag feels so light!
        </h2>

        <p className={styles.emptyCartText}>
          Let’s add some items in your bag
        </p>

        <button type="button" className={styles.startShopping}>
          START SHOPPING
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className={styles.heading}>
        My Bag ({cartItems.length} Items)
      </h2>

      <div className={styles.savingBar}>
        <BiPurchaseTagAlt />
        <span>You are saving ₹510 on this order</span>
      </div>

      <div className={styles.offerBox}>
        <div className={styles.applicable}>
          <div className={styles.offerLeft}>
            <FiTag />
            <span>Buy 3 for 1199 offer applicable</span>
          </div>

          <button type="button" className={styles.addItems}>
            Add Items
          </button>
        </div>

        <div className={styles.itemsWrapper}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartList;