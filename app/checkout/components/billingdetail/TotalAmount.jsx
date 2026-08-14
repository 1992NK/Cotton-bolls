import styles from "./billingDetail.module.css";
const ToltalAmount =({
  amount,
})=>{
    return (
    <div className={styles.totalRow}>

      <strong>
        Total Amount{" "}
        <span>
          (Incl. of GST)
        </span>
      </strong>

      <strong>
        ₹ {amount.toFixed(2)}
      </strong>

    </div>
  );
}

export default ToltalAmount;