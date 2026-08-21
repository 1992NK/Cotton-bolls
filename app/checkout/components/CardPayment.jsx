import { FiCreditCard } from "react-icons/fi";
import styles from "./cardPayment.module.css";

const CardPayment = () => {
    return (
        <div className={styles.cardAccordionBody}>
            <div className={styles.cardForm}>
                <div className={styles.cardInputGroup}>
                    <label>Card number</label>
                    <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                    />
                </div>

                <div className={styles.cardDetailsRow}>
                    <div className={styles.smallCardInput}>
                        <label>Month</label>
                        <input
                            type="text"
                            placeholder="00"
                            maxLength={2}
                        />
                    </div>

                    <div className={styles.smallCardInput}>
                        <label>Year</label>
                        <input
                            type="text"
                            placeholder="00"
                            maxLength={2}
                        />
                    </div>

                    <div className={styles.cvvInput}>
                        <label>CVV</label>
                        <input
                            type="password"
                            placeholder="XXX"
                            maxLength={3}
                        />
                    </div>
                </div>

                <div className={styles.cardInputGroup}>
                    <label>Name on card</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                    />
                </div>

                <div className={styles.cardVisualIcon}>
                    <FiCreditCard />
                </div>
            </div>
        </div>
    );
};

export default CardPayment;