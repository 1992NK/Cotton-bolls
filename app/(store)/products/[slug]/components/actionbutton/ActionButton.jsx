import styles from './actionbutton.module.css'
import { FaRegHeart } from "react-icons/fa";
const ActionButton = () => {

    return (
    <div className={styles.btns}>
      <button className={styles.cart}>
        Add to Cart
      </button>

      <button className={styles.wishlist}>
        <FaRegHeart />
      </button>
    </div>
  );
}

export default ActionButton;