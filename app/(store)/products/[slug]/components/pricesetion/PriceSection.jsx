import styles from './pricesection.module.css'
import { FaRupeeSign } from "react-icons/fa";
const PriceSection =({ product })=>{
     return (

    <div className={styles.price}>

      <span className={styles.sale}>
        <FaRupeeSign />{product.price}
      </span>

      <span className={styles.old}>
        <FaRupeeSign />{product.oldPrice}
      </span>

      <span className={styles.off}>
        {product.discount}% OFF inclusive of all taxes
      </span>

    </div>

  );
}

export default PriceSection;