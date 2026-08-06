import styles from './pricesection.module.css'
const PriceSection =({ product })=>{
     return (

    <div className={styles.price}>

      <span className={styles.sale}>
        ₹{product.price}
      </span>

      <span className={styles.old}>
        ₹{product.oldPrice}
      </span>

      <span className={styles.off}>
        {product.discount}% OFF inclusive of all taxes
      </span>

    </div>

  );
}

export default PriceSection;