import {
    FiChevronDown,
    FiChevronUp,
    FiCreditCard,
} from "react-icons/fi";

import styles from "./paymentSection.module.css";

import Radio from "./Radio";
import WalletOptions from "./WalletOptions";
import CardPayment from "./CardPayment";
import NetBanking from "./NetBanking";
import RewardsPayment from "./RewardsPayment";

const PaymentSection = ({
    selectedPayment,
    onSelectPayment,
    openMethod,
    toggleMethod,
}) => {
    const handleToggleMethod = (method) => {
        onSelectPayment(null);
        toggleMethod(method);
    };

    const handleWalletPayment = (payment) => {
        onSelectPayment(payment);
    };

    return (
        <div className={styles.paymentSection}>
            <h3 className={styles.paymentHeading}>
                Payment Options
            </h3>

            <div className={styles.paymentBox}>
                {/* CB MONEY */}
                <div className={styles.tssRow}>
                    <div className={styles.paymentName}>
                        <div className={styles.paymentIcon}>
                            <FiCreditCard />
                        </div>

                        <span>CB Money</span>
                    </div>

                    <div className={styles.tssRight}>
                        <span className={styles.usedText}>
                            Used ₹ 0.00 (Balance Left: ₹ 0.00)
                        </span>

                        <span className={styles.radio} />
                    </div>
                </div>

                {/* UPI */}
                <div
                    className={`${styles.paymentRow} ${
                        selectedPayment === "upi"
                            ? styles.selectedPayment
                            : ""
                    }`}
                    onClick={() => onSelectPayment("upi")}
                >
                    <div className={styles.paymentName}>
                        <span>Pay with any UPI App</span>
                    </div>

                    <Radio
                        active={selectedPayment === "upi"}
                    />
                </div>

                {/* WALLET */}
                <div
                    className={
                        openMethod === "wallet"
                            ? styles.accordionHeaderOpen
                            : styles.accordionHeaderClosed
                    }
                    onClick={() => handleToggleMethod("wallet")}
                >
                    <div className={styles.paymentName}>
                        <span>Wallets</span>
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
                        setSelectedPayment={handleWalletPayment}
                    />
                )}

                {/* CREDIT & DEBIT CARDS */}
                <div className={styles.cardAccordion}>
                    <div
                        className={
                            openMethod === "card"
                                ? styles.accordionHeaderOpen
                                : styles.accordionHeaderClosed
                        }
                        onClick={() => handleToggleMethod("card")}
                    >
                        <div className={styles.paymentName}>
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

                {/* NETBANKING */}
                <div
                    className={
                        openMethod === "netbanking"
                            ? styles.accordionHeaderOpen
                            : styles.accordionHeaderClosed
                    }
                    onClick={() =>
                        handleToggleMethod("netbanking")
                    }
                >
                    <div className={styles.paymentName}>
                        <span>Netbanking</span>
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

                {/* COD */}
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
                            We recommend making prepaid payments
                            to ensure your deliveries are
                            contactless.
                        </p>
                    </div>

                    <Radio
                        active={selectedPayment === "cod"}
                    />
                </div>

                {/* REWARDS */}
                <RewardsPayment
                    selectedPayment={selectedPayment}
                    onSelectPayment={onSelectPayment}
                />
            </div>
        </div>
    );
};

export default PaymentSection;