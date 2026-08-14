import styles from "./billingDetail.module.css";
const MemberSavings =({
  amount,
})=>{
    return (
    <div className={styles.savingsRow}>

      <strong>
        Member Savings
      </strong>

      <strong>
        - ₹ {amount.toFixed(2)}
      </strong>

    </div>
  );
}

export default MemberSavings