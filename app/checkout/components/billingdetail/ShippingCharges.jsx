import styles from "./billingDetail.module.css";
const ShippingCharges =({
  amount,
})=>{
    return (
    <div className={styles.billRow}>

      <span>
        Shipping Charges
      </span>

      <div className={styles.shippingValue}>

        <strong>
          Free
        </strong>

        <del>
          ₹ {amount.toFixed(2)}
        </del>

      </div>

    </div>
  );
}

export default ShippingCharges