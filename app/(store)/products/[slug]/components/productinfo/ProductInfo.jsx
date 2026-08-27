import PriceSection from "../pricesetion/PriceSection";
import SizeSelector from "../sizeselector/SizeSelector";
import ActionButtons from "../actionbutton/ActionButton";
import DeliveryInfo from "../deliveryinfo/DeliveryInfo";
import ColorSelector from "../colorselector/ColorSelector";

import styles from "./productinfo.module.css";
import KeyhighLight from "../keyhighlight/KeyhighLight";
import ProductAccordion from "../productaccordion/ProductAccordion";
import TrustBadges from "../trustbadges/TrustBadges";
import ProductReviews from "../productreview/ProductReviews";
import CustomerReviews from "../customerReview/CustomerReviews";
import CouponOffers from "../couponOffers/CouponOffers";

export default function ProductInfo({
  product,
  selectedColor,
  setSelectedColor,
}) {
  return (
    <div className={styles.wrapper}>
      <h1>{product.title}</h1>

      <div className={styles.rating}>
        ⭐ 4.4
        <span> | </span>
        128 Ratings & 15 Reviews
      </div>

      <PriceSection product={product} />

      <div className={styles.offer}>
        Get it for as low as <b>₹426</b>
      </div>

      <div className={styles.people}>
        66 people bought this in the last 7 days
      </div>

      <ColorSelector
        colors={product.colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

       <SizeSelector sizes={product.sizes} /> 

      <div className={styles.cartArea}>
       
        <ActionButtons />
      </div>

      <CouponOffers />

      <DeliveryInfo />

      <KeyhighLight />

      <ProductAccordion />

      <TrustBadges />

      <ProductReviews />

      <CustomerReviews />

    </div>
  );
}