import styles from "./billingDetail.module.css";

import CartTotal from "./CartTotal";
import MemberSavings from "./MemberSavings";
import CodCharges from "./CodCharges";
import ShippingCharges from "./ShippingCharges";
import TotalAmount from "./TotalAmount";
import PlaceOrderButton from "./PlaceOrderButton";

export default function BillingDetails({
  cartTotal = 0,
  memberSavings = 0,
  codCharges = 0,
  shippingCharges = 0,
  isCOD = false,
  onPlaceOrder,
}) {
  const codAmount = isCOD
    ? codCharges
    : 0;

  const totalAmount =
    cartTotal -
    memberSavings +
    codAmount;

  return (
    <aside className={styles.billingSection}>

      <h3 className={styles.billingHeading}>
        BILLING DETAILS
      </h3>

      <div className={styles.billingBox}>

        <CartTotal
          amount={cartTotal}
        />

        <MemberSavings
          amount={memberSavings}
        />

        {isCOD && (
          <CodCharges
            amount={codCharges}
          />
        )}

        <ShippingCharges
          amount={shippingCharges}
        />

        <TotalAmount
          amount={totalAmount}
        />

      </div>

      <PlaceOrderButton
        onClick={onPlaceOrder}
      />

    </aside>
  );
}