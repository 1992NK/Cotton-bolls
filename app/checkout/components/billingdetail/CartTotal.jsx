import styles from "./billingDetail.module.css";
const CartTotal =({
  amount,
})=>{
    return (
    <div className={styles.billRow}>

      <span>
        Cart Total (Incl. of all taxes)
      </span>

      <strong>
        ₹ {amount.toFixed(2)}
      </strong>

    </div>
  );
}

export default CartTotal