import styles from "./walletOptions.module.css";
import Radio from "./Radio";

const WalletOptions = ({
    selectedPayment,
    setSelectedPayment,
}) => {
    return (
        <div className={styles.accordionBody}>
            <div
                className={styles.walletOption}
                onClick={() => setSelectedPayment("paytm")}
            >
                <div className={styles.walletLeft}>
                    <div className={styles.walletLogo}>
                        <img
                            src="/images/payment/paytm.png"
                            alt="Paytm"
                        />
                    </div>

                    <span>Paytm</span>
                </div>

                <Radio
                    active={selectedPayment === "paytm"}
                />
            </div>

            <div
                className={styles.walletOption}
                onClick={() => setSelectedPayment("phonepe")}
            >
                <div className={styles.walletLeft}>
                    <div className={styles.walletLogo}>
                        <img
                            src="/images/payment/phonepe.png"
                            alt="PhonePe"
                        />
                    </div>

                    <span>PhonePe</span>
                </div>

                <Radio
                    active={selectedPayment === "phonepe"}
                />
            </div>

            <div
                className={styles.walletOption}
                onClick={() =>
                    setSelectedPayment("amazonpay")
                }
            >
                <div className={styles.walletLeft}>
                    <div className={styles.walletLogo}>
                        <img
                            src="/images/payment/amazon-pay.png"
                            alt="Amazon Pay"
                        />
                    </div>

                    <span>Amazon Pay</span>
                </div>

                <Radio
                    active={selectedPayment === "amazonpay"}
                />
            </div>
        </div>
    );
};

export default WalletOptions;