import Image from "next/image";
import styles from "./featuredProduct.module.css";

const ProductCard =({product})=>{
  console.log(product);
console.log(product.image);
 return (
    <div className={styles.card}>
      <div className={styles.imageBox}>

        {product.discount && (
          <span className={styles.badge}>
            {product.discount}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={300}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{product.category}</p>

        <h3>{product.title}</h3>

        <div className={styles.price}>
          {product.oldPrice && (
            <span className={styles.oldPrice}>
              ${product.oldPrice}
            </span>
          )}

          <span className={styles.newPrice}>
            ${product.price}
          </span>
        </div>

        <button>Select options</button>
      </div>
    </div>
  );
}

export default ProductCard;

