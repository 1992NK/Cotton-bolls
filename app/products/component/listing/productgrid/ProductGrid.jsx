import styles from "./productgrid.module.css";
import ProductCard from "@/component/featuredProducts/ProductCard";
import featuredProducts from "@/data/featuredProductData";
const ProductGrid =()=>{
     return (
    <div className={styles.grid}>
      {featuredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;