import styles from "./featuredProduct.module.css";
import featuredProducts from "../../data/featuredProductData";
import ProductCard from "./ProductCard";

const FeaturedProducts=()=>{
return (
    <section className={styles.section}>

      <div className={styles.heading}>

        <h2>Featured Products</h2>

        <a href="#">Shop all categories →</a>

      </div>

      <div className={styles.grid}>

        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;
