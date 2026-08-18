"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./orderpage.module.css";

import orders from "../../../data/orderData";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

const Orders = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className={styles.pageWrapper}>

                    {/* LEFT SIDEBAR */}
                    <aside className={styles.sidebar}>
                        <ProfileSidebar />
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className={styles.content}>

                        <div className={styles.breadcrumb}>
                            MY ORDERS
                        </div>

                        <div className={styles.orderList}>

                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className={styles.orderCard}
                                >

                                    {/* ORDER HEADER */}
                                    <div className={styles.orderHeader}>

                                        <div>
                                            <strong>Order ID:</strong>{" "}
                                            {order.id}
                                        </div>

                                        <div>
                                            <strong>Date:</strong>{" "}
                                            {order.date}
                                        </div>

                                        {/* INVOICE LINK */}
                                        <Link
                                            href={`/view-invoice/${order.id}`}
                                            className={styles.invoiceLink}
                                        >
                                            Invoice
                                        </Link>

                                    </div>

                                    {/* PRODUCTS */}
                                    {order.products.map((product) => (
                                        <div
                                            className={styles.product}
                                            key={product.id}
                                        >
                                            <div className={styles.productImage}>
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={90}
                                                    height={110}
                                                />
                                            </div>

                                            <div className={styles.productInfo}>

                                                <h3>
                                                    {product.name}
                                                </h3>

                                                <p>
                                                    {product.category}
                                                </p>

                                                <span>
                                                    Size: {product.size} | Qty:{" "}
                                                    {product.quantity}
                                                </span>

                                                <strong>
                                                    ₹ {product.price.toFixed(2)}
                                                </strong>

                                            </div>
                                        </div>
                                    ))}

                                    {/* ORDER DETAIL LINK */}
                                    <Link
                                        href={`/orders/${order.id}`}
                                        className={styles.viewDetails}
                                    >
                                        View Order Details →
                                    </Link>

                                </div>
                            ))}

                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Orders;