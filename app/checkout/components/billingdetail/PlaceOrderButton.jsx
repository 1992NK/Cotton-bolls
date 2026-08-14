import styles from "./billingDetail.module.css";
const PlaceOrderButton =({
  onClick,
})=>{
   return (
    <button
      type="button"
      className={styles.placeOrderButton}
      onClick={onClick}
    >
      PLACE ORDER
    </button>
  );  

}

export default PlaceOrderButton