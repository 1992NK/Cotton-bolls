import { useEffect, useState } from "react";
import styles from './sizeselector.module.css'
const SizeSelector = ({ sizes = [] }) => {
      const [selectedSize, setSelectedSize] = useState("");

     useEffect(() => {
    if (sizes.length > 0) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes]);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Select Size</h3>

      <div className={styles.list}>
        {sizes.map((size) => (
          <label key={size} className={styles.sizeLabel}>
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={(e) => setSelectedSize(e.target.value)}
            />

            <span className={styles.size}>{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
   
}

export default SizeSelector;