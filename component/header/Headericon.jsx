import styles from './headericon.module.css'
import { FaRegUser, FaRegHeart, FaShoppingBag } from 'react-icons/fa';

export default function HeaderIcons() {
  return (
    <div className={styles.headerIcons}>

      <div>
        <FaRegUser />
      </div>

      <div>
        <FaRegHeart />
      </div>

      <div>
        <FaShoppingBag />
      </div>

    </div>
  );
}