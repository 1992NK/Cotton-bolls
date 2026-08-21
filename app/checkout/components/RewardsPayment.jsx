import { FiGift } from "react-icons/fi";
import styles from "./rewardsPayment.module.css";
import Radio from "./Radio";
const RewardsPayment = ({
    selectedPayment,
    onSelectPayment,
}) => {
    return (
        <div
            className={`${styles.rewardsRow} ${
                selectedPayment === "rewards"
                    ? styles.rewardSelected
                    : ""
            }`}
            onClick={() => onSelectPayment("rewards")}
        >
            <div className={styles.rewardIcon}>
                <FiGift />
            </div>

            <div className={styles.rewardContent}>
                <div className={styles.rewardTop}>
                    <div>
                        <div className={styles.rewardTitle}>
                            Pay with Rewards
                        </div>

                        <div className={styles.balance}>
                            Available balance:
                            370 points
                        </div>
                    </div>

                    <div className={styles.cashback}>
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
                active={selectedPayment === "rewards"}
            />
        </div>
    );
};

export default RewardsPayment;