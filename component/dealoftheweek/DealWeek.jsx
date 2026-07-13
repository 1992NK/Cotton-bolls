import styles from "./dealweek.module.css";
import Countdown from "./CountDown";
import dealData from "../../data/dealdata";

const DealWeek =()=>{
    return (
    <section className={styles.dealSection}>
      <div className={styles.container}>

        <div className={styles.left}>
          <img
            src={dealData.image}
            alt={dealData.title}
          />
        </div>

        <div className={styles.right}>

          <p className={styles.tag}>
            DEAL OF THE WEEK
          </p>

          <h2>{dealData.title}</h2>

          <p className={styles.desc}>
            {dealData.subtitle}
          </p>

          <Countdown
            expiryDate={dealData.expiryDate}
          />

          <button>
            {dealData.buttonText}
          </button>

        </div>

      </div>
    </section>
  );
}

export default DealWeek;