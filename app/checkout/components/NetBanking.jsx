import styles from "./netBanking.module.css";

const NetBanking = () => {
    return (
        <div className={styles.accordionBody}>
            <div className={styles.bankGrid}>
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
    );
};

export default NetBanking;