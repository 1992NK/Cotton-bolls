"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    FiPlus,
    FiChevronDown,
    FiChevronUp,
    FiCheck,
    FiCreditCard,
    FiGift,
    FiSmartphone,
    FiBriefcase,
    FiShoppingBag,
} from "react-icons/fi";

import styles from "./checkout.module.css";
import BillingDetails from "./components/billingdetail/BillingDetails";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

export default function CheckoutPage() {
    const router = useRouter();

    const [selectedPayment, setSelectedPayment] = useState("cod");
    const [openMethod, setOpenMethod] = useState(null);

    const selectPayment = (payment) => {
        setSelectedPayment(payment);
        setOpenMethod(null);
    };

    const toggleMethod = (method) => {
        setOpenMethod((previous) =>
            previous === method ? null : method
        );
    };

    const handlePlaceOrder = () => {
        console.log("Selected Payment:", selectedPayment);
        console.log("Place Order");
    };

    const handleAddNewAddress = () => {
        router.push("/delivery-address");
    };

    return (
        <>
            <Header />

            <section className={styles.checkoutPage}>
                <div className="container">
                    <div className={styles.checkoutrow}>

                        {/* =========================
                            LEFT SECTION
                        ========================== */}
                        <section className={styles.leftSection}>

                            {/* =========================
                                ADDRESS
                            ========================== */}
                            <div className={styles.addressWrapper}>
                                <button
                                    type="button"
                                    className={styles.addAddressButton}
                                    onClick={handleAddNewAddress}
                                >
                                    <FiPlus />
                                    <span>Add New Address</span>
                                </button>
                            </div>

                            {/* =========================
                                PAYMENT SECTION
                            ========================== */}
                            <div className={styles.paymentSection}>

                                <h3 className={styles.paymentHeading}>
                                    Payment Options
                                </h3>

                                <div className={styles.paymentBox}>

                                    {/* =========================
                                        TSS MONEY
                                    ========================== */}
                                    <div className={styles.tssRow}>

                                        <div className={styles.paymentName}>

                                            <div className={styles.paymentIcon}>
                                                <FiCreditCard />
                                            </div>

                                            <span>
                                                TSS Money
                                            </span>

                                        </div>

                                        <div className={styles.tssRight}>

                                            <span className={styles.usedText}>
                                                Used ₹ 0.00 (Balance Left: ₹ 0.00)
                                            </span>

                                            <span className={styles.radio} />

                                        </div>

                                    </div>


                                    {/* =========================
                                        UPI
                                    ========================== */}
                                    <div
                                        className={`${styles.paymentRow} ${
                                            selectedPayment === "upi"
                                                ? styles.selectedPayment
                                                : ""
                                        }`}
                                        onClick={() =>
                                            selectPayment("upi")
                                        }
                                    >

                                        <div className={styles.paymentName}>

                                            <div className={styles.paymentIcon}>
                                                <FiSmartphone />
                                            </div>

                                            <span>
                                                Pay with any UPI App
                                            </span>

                                        </div>

                                        <Radio
                                            active={
                                                selectedPayment === "upi"
                                            }
                                        />

                                    </div>


                                    {/* =========================
                                        WALLETS
                                    ========================== */}
                                    <div
                                        className={styles.accordionHeader}
                                        onClick={() =>
                                            toggleMethod("wallet")
                                        }
                                    >

                                        <div className={styles.paymentName}>

                                            <div className={styles.paymentIcon}>
                                                <FiShoppingBag />
                                            </div>

                                            <span>
                                                Wallets
                                            </span>

                                        </div>

                                        <div className={styles.arrowIcon}>

                                            {openMethod === "wallet" ? (
                                                <FiChevronUp />
                                            ) : (
                                                <FiChevronDown />
                                            )}

                                        </div>

                                    </div>


                                    {openMethod === "wallet" && (
                                        <div className={styles.accordionBody}>

                                            {/* PAYTM */}
                                            <div
                                                className={styles.walletOption}
                                                onClick={() =>
                                                    setSelectedPayment("paytm")
                                                }
                                            >

                                                <div className={styles.walletLeft}>

                                                    <div className={styles.walletLogo}>
                                                        <img
                                                            src="/images/payment/paytm.png"
                                                            alt="Paytm"
                                                        />
                                                    </div>

                                                    <span>
                                                        Paytm
                                                    </span>

                                                </div>

                                                <Radio
                                                    active={
                                                        selectedPayment ===
                                                        "paytm"
                                                    }
                                                />

                                            </div>


                                            {/* PHONEPE */}
                                            <div
                                                className={styles.walletOption}
                                                onClick={() =>
                                                    setSelectedPayment("phonepe")
                                                }
                                            >

                                                <div className={styles.walletLeft}>

                                                    <div className={styles.walletLogo}>
                                                        <img
                                                            src="/images/payment/phonepe.png"
                                                            alt="PhonePe"
                                                        />
                                                    </div>

                                                    <span>
                                                        PhonePe
                                                    </span>

                                                </div>

                                                <Radio
                                                    active={
                                                        selectedPayment ===
                                                        "phonepe"
                                                    }
                                                />

                                            </div>


                                            {/* AMAZON PAY */}
                                            <div
                                                className={styles.walletOption}
                                                onClick={() =>
                                                    setSelectedPayment(
                                                        "amazonpay"
                                                    )
                                                }
                                            >

                                                <div className={styles.walletLeft}>

                                                    <div className={styles.walletLogo}>
                                                        <img
                                                            src="/images/payment/amazon-pay.png"
                                                            alt="Amazon Pay"
                                                        />
                                                    </div>

                                                    <span>
                                                        Amazon Pay
                                                    </span>

                                                </div>

                                                <Radio
                                                    active={
                                                        selectedPayment ===
                                                        "amazonpay"
                                                    }
                                                />

                                            </div>

                                        </div>
                                    )}


                                    {/* =========================
                                        CREDIT & DEBIT CARDS
                                    ========================== */}

                                    <div
                                        className={`${styles.cardAccordion} ${
                                            openMethod === "card"
                                                ? styles.cardAccordionOpen
                                                : ""
                                        }`}
                                    >

                                        {/* CARD HEADER */}

                                        <div
                                            className={styles.accordionHeader}
                                            onClick={() =>
                                                toggleMethod("card")
                                            }
                                        >

                                            <div className={styles.paymentName}>

                                                <div
                                                    className={
                                                        styles.paymentIcon
                                                    }
                                                >
                                                    <FiCreditCard />
                                                </div>

                                                <span>
                                                    Credit &amp; Debit Cards
                                                </span>

                                            </div>

                                            <div className={styles.arrowIcon}>

                                                {openMethod === "card" ? (
                                                    <FiChevronUp />
                                                ) : (
                                                    <FiChevronDown />
                                                )}

                                            </div>

                                        </div>


                                        {/* CARD BODY */}

                                        {openMethod === "card" && (
                                            <div
                                                className={
                                                    styles.cardAccordionBody
                                                }
                                            >

                                                <div
                                                    className={
                                                        styles.cardForm
                                                    }
                                                >

                                                    {/* CARD NUMBER */}

                                                    <div
                                                        className={
                                                            styles.cardInputGroup
                                                        }
                                                    >

                                                        <label>
                                                            Card number
                                                        </label>

                                                        <input
                                                            type="text"
                                                            placeholder="XXXX XXXX XXXX XXXX"
                                                        />

                                                    </div>


                                                    {/* MONTH / YEAR / CVV */}

                                                    <div
                                                        className={
                                                            styles.cardDetailsRow
                                                        }
                                                    >

                                                        {/* MONTH */}

                                                        <div
                                                            className={
                                                                styles.smallCardInput
                                                            }
                                                        >

                                                            <label>
                                                                Month
                                                            </label>

                                                            <input
                                                                type="text"
                                                                placeholder="00"
                                                                maxLength={2}
                                                            />

                                                        </div>


                                                        {/* YEAR */}

                                                        <div
                                                            className={
                                                                styles.smallCardInput
                                                            }
                                                        >

                                                            <label>
                                                                Year
                                                            </label>

                                                            <input
                                                                type="text"
                                                                placeholder="00"
                                                                maxLength={2}
                                                            />

                                                        </div>


                                                        {/* CVV */}

                                                        <div
                                                            className={
                                                                styles.cvvInput
                                                            }
                                                        >

                                                            <label>
                                                                CVV
                                                            </label>

                                                            <input
                                                                type="password"
                                                                placeholder="XXX"
                                                                maxLength={3}
                                                            />

                                                        </div>

                                                    </div>


                                                    {/* NAME ON CARD */}

                                                    <div
                                                        className={
                                                            styles.cardInputGroup
                                                        }
                                                    >

                                                        <label>
                                                            Name on card
                                                        </label>

                                                        <input
                                                            type="text"
                                                            placeholder="Your Name"
                                                        />

                                                    </div>


                                                    {/* CARD ICON */}

                                                    <div
                                                        className={
                                                            styles.cardVisualIcon
                                                        }
                                                    >

                                                        <FiCreditCard />

                                                    </div>

                                                </div>

                                            </div>
                                        )}

                                    </div>


                                    {/* =========================
                                        NET BANKING
                                    ========================== */}

                                    <div
                                        className={styles.accordionHeader}
                                        onClick={() =>
                                            toggleMethod("netbanking")
                                        }
                                    >

                                        <div className={styles.paymentName}>

                                            <div className={styles.paymentIcon}>
                                                <FiBriefcase />
                                            </div>

                                            <span>
                                                Netbanking
                                            </span>

                                        </div>

                                        <div className={styles.arrowIcon}>

                                            {openMethod === "netbanking" ? (
                                                <FiChevronUp />
                                            ) : (
                                                <FiChevronDown />
                                            )}

                                        </div>

                                    </div>


                                    {openMethod === "netbanking" && (
                                        <div
                                            className={
                                                styles.accordionBody
                                            }
                                        >

                                            <div
                                                className={
                                                    styles.bankGrid
                                                }
                                            >

                                                <button type="button">
                                                    HDFC Bank
                                                </button>

                                                <button type="button">
                                                    ICICI Bank
                                                </button>

                                                <button type="button">
                                                    SBI
                                                </button>

                                                <button type="button">
                                                    Axis Bank
                                                </button>

                                            </div>

                                        </div>
                                    )}


                                    {/* =========================
                                        COD
                                    ========================== */}

                                    <div
                                        className={`${styles.codRow} ${
                                            selectedPayment === "cod"
                                                ? styles.codSelected
                                                : ""
                                        }`}
                                        onClick={() =>
                                            selectPayment("cod")
                                        }
                                    >

                                        <div className={styles.codContent}>

                                            <div className={styles.codTitle}>
                                                COD
                                            </div>

                                            <p>
                                                We recommend making prepaid
                                                payments to ensure your
                                                deliveries are contactless.
                                            </p>

                                        </div>

                                        <Radio
                                            active={
                                                selectedPayment === "cod"
                                            }
                                        />

                                    </div>


                                    {/* =========================
                                        REWARDS
                                    ========================== */}

                                    <div
                                        className={`${styles.rewardsRow} ${
                                            selectedPayment === "rewards"
                                                ? styles.rewardSelected
                                                : ""
                                        }`}
                                        onClick={() =>
                                            selectPayment("rewards")
                                        }
                                    >

                                        <div className={styles.rewardIcon}>
                                            <FiGift />
                                        </div>

                                        <div
                                            className={
                                                styles.rewardContent
                                            }
                                        >

                                            <div
                                                className={
                                                    styles.rewardTop
                                                }
                                            >

                                                <div>

                                                    <div
                                                        className={
                                                            styles.rewardTitle
                                                        }
                                                    >
                                                        Pay with Rewards
                                                    </div>

                                                    <div
                                                        className={
                                                            styles.balance
                                                        }
                                                    >
                                                        Available balance:
                                                        370 points
                                                    </div>

                                                </div>

                                                <div
                                                    className={
                                                        styles.cashback
                                                    }
                                                >
                                                    Get up to 1000 TWID Stars
                                                    Cashback on every spend.
                                                    Hurry!
                                                </div>

                                            </div>

                                            <p>
                                                Payment using rewards points,
                                                supported by loyalty programs.
                                            </p>

                                        </div>

                                        <Radio
                                            active={
                                                selectedPayment ===
                                                "rewards"
                                            }
                                        />

                                    </div>

                                </div>
                            </div>

                        </section>


                        {/* =========================
                            BILLING DETAILS
                        ========================== */}

                        <BillingDetails
                            cartTotal={2698}
                            memberSavings={200}
                            codCharges={29}
                            shippingCharges={50}
                            isCOD={selectedPayment === "cod"}
                            onPlaceOrder={handlePlaceOrder}
                        />

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}


/* =========================================
   RADIO COMPONENT
========================================= */

function Radio({ active }) {
    return (
        <span
            className={`${styles.radio} ${
                active ? styles.radioActive : ""
            }`}
        >
            {active && <FiCheck />}
        </span>
    );
}