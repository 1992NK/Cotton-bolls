"use client";

import featuredProducts from "@/data/featuredProductData";
import ProductCard from "@/component/featuredProducts/ProductCard";

import styles from './similarproducts.module.css'
const SimilarProducts =({ currentProduct })=>{
     const similarProducts = featuredProducts
        .filter(item =>
            item.category === currentProduct.category &&
            item.id !== currentProduct.id
        )
        .slice(0,4);

    if(similarProducts.length===0){
        return null;
    }

    return(

        <section className={styles.section}>

            <div className="container">

                <h2 className={styles.heading}>
                    Similar Products
                </h2>

                <div className={styles.grid}>

                    {
                        similarProducts.map(product=>(
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    }

                </div>

            </div>

        </section>

    )
}

export default SimilarProducts