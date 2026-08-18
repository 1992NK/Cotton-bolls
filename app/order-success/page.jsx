"use client";

import styles from "./orderSuccess.module.css";

import OrderSuccessHeader from "./components/OrderSuccessHeader";
import OrderSummary from "./components/OrderSummary";
import OrderedProducts from "./components/OrderedProducts";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

export default function OrderSuccessPage() {
  const orderData = {
    orderId: "20357993",

    totalAmount: "₹2527.00",

    paymentMethod: "COD",

    phone: "9625141776",

    arrivingBy: "18/08/2026",

    address:
      "NEERAJ KATIYAR , KURLA, KURLA, MUMBAI, MAHARASHTRA, 400070, INDIA",

    products: [
      {
        id: 1,
        image: "/images/products/shirt1.jpg",
        name: "Cotton Linen: Sky Blue",
        category: "Cotton Linen Shirts",
        quantity: 1,
        size: "M",
      },
      {
        id: 2,
        image: "/images/products/panda-tshirt.jpg",
        name: "Kung Fu Panda: Master",
        category: "Oversized T-Shirts",
        quantity: 1,
        size: "M",
      },
    ],
  };

  return (

    <>
    <Header />
    
    <section className={styles.orderSuccessPage}>
      <div className="container">

        {/* Success Header */}
        <OrderSuccessHeader
          orderId={orderData.orderId}
        />

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Order Summary */}
        <OrderSummary
          totalAmount={orderData.totalAmount}
          paymentMethod={orderData.paymentMethod}
          phone={orderData.phone}
          arrivingBy={orderData.arrivingBy}
          address={orderData.address}
        />

        {/* Products */}
        <OrderedProducts products={orderData.products} />

      </div>
    </section>

    <Footer />
    
    </>

  );
}