"use client";

import { useState } from "react";
import styles from "./cart.module.css";
import CartList from "./components/cartlist/CartList";
import CouponCard from "./components/couponCard/CouponCard";
import DeliveryCard from "./components/deliveryCard/DeliveryCard";
import Features from "./components/features/Features";
import PriceSummary from "./components/priceSummary/PriceSummary";
import CheckoutStepper from "@/checkout/components/checkoutStepper/CheckoutStepper";

const initialCartItems = [
  {
    id: 1,
    title: "Nike Air Max",
    name: "Men's T-Shirt",
    selectedImage: "/images/tshirt.jpg",
    price: 699,
    quantity: 1,
    size: "S",
  },
  {
    id: 2,
    title: "Nike Air Max",
    name: "Jeans",
    selectedImage: "/images/jeans.jpg",
    price: 1299,
    quantity: 1,
    size: "M",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    console.log("Remove clicked:", id);
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const isCartEmpty = cartItems.length === 0;

  return (

    <>
      

      <div className="container">

        <CheckoutStepper />

        <div
          className={`${styles.cartPage} ${isCartEmpty ? styles.emptyCartPage : ""
            }`}
        >
          <div className={styles.left}>
            <CartList cartItems={cartItems} onRemove={handleRemove} />
          </div>

          {!isCartEmpty && (
            <div className={styles.right}>
              <DeliveryCard />
              <CouponCard />
              <PriceSummary />
              <Features />
            </div>
          )}
        </div>

      </div>

    </>
  );
};

export default Cart;