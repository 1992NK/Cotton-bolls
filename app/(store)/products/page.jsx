import Breadcrumbs from "./component/common/breadcrumbs/Breadcrumbs";
import FilterSidebar from "./component/listing/filtersidebar/FilterSidebar";
import ProductGrid from "./component/listing/productgrid/ProductGrid";
import styles from "./listingpage.module.css";

const Listingpage = () => {
    const breadcrumb = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Clothing",
            href: "/products?category=clothing",
        },
        {
            label: "Men T-Shirts",
        },
    ];

    return (
        <>
            <div className="container">
                <Breadcrumbs items={breadcrumb} />

                

                <div className={styles.listingWrapper}>
                    <div className={styles.sidebar}>
                        <FilterSidebar />
                    </div>

                    <div className={styles.products}>
                        <h2 className={styles.productTitle}>Men T-Shirts</h2>
                        <ProductGrid />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Listingpage;