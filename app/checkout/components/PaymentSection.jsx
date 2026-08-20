import {
    FiChevronDown,
    FiChevronUp,
    FiCreditCard,
    FiGift,
    FiSmartphone,
    FiBriefcase,
    FiShoppingBag,
} from "react-icons/fi";

import styles from "./paymentSection.module.css";

import Radio from "./Radio";
import WalletOptions from "./WalletOptions";
import CardPayment from "./CardPayment";
import NetBanking from "./NetBanking";
import RewardsPayment from "./RewardsPayment";

export default function PaymentSection({
    selectedPayment,
    onSelectPayment,
    openMethod,
    toggleMethod,
}) {
    return (
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
                    onClick={() => onSelectPayment("upi")}
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
                        active={selectedPayment === "upi"}
                    />

                </div>


                {/* =========================
                    WALLETS
                ========================== */}

                <div
                    className={styles.accordionHeader}
                    onClick={() => toggleMethod("wallet")}
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
                    <WalletOptions
                        selectedPayment={selectedPayment}
                        setSelectedPayment={onSelectPayment}
                    />
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

                    <div
                        className={styles.accordionHeader}
                        onClick={() => toggleMethod("card")}
                    >

                        <div className={styles.paymentName}>

                            <div className={styles.paymentIcon}>
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

                    {openMethod === "card" && (
                        <CardPayment />
                    )}

                </div>


                {/* =========================
                    NET BANKING
                ========================== */}

                <div
                    className={styles.accordionHeader}
                    onClick={() => toggleMethod("netbanking")}
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
                    <NetBanking />
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
                    onClick={() => onSelectPayment("cod")}
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
                        active={selectedPayment === "cod"}
                    />

                </div>


                {/* =========================
                    REWARDS
                ========================== */}

                <RewardsPayment
                    selectedPayment={selectedPayment}
                    onSelectPayment={onSelectPayment}
                />

            </div>

        </div>
    );
}