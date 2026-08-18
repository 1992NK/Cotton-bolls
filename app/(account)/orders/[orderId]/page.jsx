"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useParams } from "next/navigation";

import styles from "./orderDetails.module.css";

import orders from "../../../../data/orderData";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

const OrderDetails = () => {
    const { orderId } = useParams();

    const order = orders.find(
        (item) => String(item.id) === String(orderId)
    );

    if (!order) {
        return (
            <div className={styles.notFound}>
                <h2>Order Not Found</h2>

                <Link href="/orders">
                    ← Back to My Orders
                </Link>
            </div>
        );
    }

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

                        {/* BREADCRUMB */}
                        <div className={styles.breadcrumb}>
                            <span>MY ORDERS</span>

                            <FiChevronRight />

                            <strong>ORDER DETAILS</strong>
                        </div>

                        {/* ORDER BOX */}
                        <div className={styles.orderBox}>

                            {/* ORDER HEADER */}
                            <div className={styles.orderHeader}>

                                <div>
                                    <strong>Order ID :</strong>{" "}
                                    <span>{order.id}</span>
                                </div>

                                <div>
                                    <strong>Date :</strong>{" "}
                                    <span>{order.date}</span>
                                </div>

                            </div>

                            {/* PRODUCTS */}
                            <div className={styles.products}>

                                {order.products.map((product) => (
                                    <div
                                        className={styles.product}
                                        key={product.id}
                                    >

                                        {/* IMAGE */}
                                        <div className={styles.productImage}>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={75}
                                                height={100}
                                            />
                                        </div>

                                        {/* INFO */}
                                        <div className={styles.productInfo}>

                                            <h2>
                                                {product.name}
                                            </h2>

                                            <p className={styles.category}>
                                                {product.category}
                                            </p>

                                            <p className={styles.size}>
                                                Size: {product.size} | Qty:{" "}
                                                {product.quantity}
                                            </p>

                                            <strong className={styles.price}>
                                                ₹ {product.price.toFixed(2)}
                                            </strong>

                                            <p className={styles.cancelText}>
                                                Order can’t be cancelled once
                                                it is shipped.
                                            </p>

                                        </div>

                                    </div>
                                ))}

                            </div>

                            {/* TRACKING */}
                            <div className={styles.tracking}>

                                {order.timeline.map((step, index) => (
                                    <div
                                        className={`${styles.timelineItem} ${step.completed
                                                ? styles.completed
                                                : ""
                                            }`}
                                        key={`${step.title}-${index}`}
                                    >

                                        {/* LINE */}
                                        {index < order.timeline.length - 1 && (
                                            <div
                                                className={
                                                    styles.timelineLine
                                                }
                                            />
                                        )}

                                        {/* DOT */}
                                        <div
                                            className={
                                                styles.timelineDot
                                            }
                                        />

                                        {/* CONTENT */}
                                        <div
                                            className={
                                                styles.timelineContent
                                            }
                                        >

                                            <div
                                                className={
                                                    styles.timelineTitle
                                                }
                                            >
                                                {step.title}
                                            </div>

                                            {step.description && (
                                                <p>
                                                    {step.description}
                                                </p>
                                            )}

                                            {step.track && (
                                                <button
                                                    type="button"
                                                    className={
                                                        styles.trackButton
                                                    }
                                                >
                                                    Track
                                                </button>
                                            )}

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </main>
                </div>
            </div>

            <Footer />
        </>

    );
};

export default OrderDetails;