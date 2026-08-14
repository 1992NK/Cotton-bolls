import styles from "./billingDetail.module.css";
const CodCharges =({
  amount,
})=>{
    return (
    <div className={styles.billRow}>

      <span>
        COD
      </span>

      <span>
        ₹ {amount.toFixed(2)}
      </span>

    </div>
  );
}

export default CodCharges