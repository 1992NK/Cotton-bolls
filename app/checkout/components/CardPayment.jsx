import { FiCreditCard } from "react-icons/fi";

import styles from "./cardPayment.module.css";

export default function CardPayment() {
    return (
        <div className={styles.cardAccordionBody}>

            <div className={styles.cardForm}>

                {/* CARD NUMBER */}

                <div className={styles.cardInputGroup}>

                    <label>
                        Card number
                    </label>

                    <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                    />

                </div>


                {/* MONTH / YEAR / CVV */}

                <div className={styles.cardDetailsRow}>

                    {/* MONTH */}

                    <div className={styles.smallCardInput}>

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

                    <div className={styles.smallCardInput}>

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

                    <div className={styles.cvvInput}>

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

                <div className={styles.cardInputGroup}>

                    <label>
                        Name on card
                    </label>

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                </div>


                {/* CARD ICON */}

                <div className={styles.cardVisualIcon}>
                    <FiCreditCard />
                </div>

            </div>

        </div>
    );
}