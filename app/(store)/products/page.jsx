"use client";

import { useState } from "react";

import Breadcrumbs from "./component/common/breadcrumbs/Breadcrumbs";
import HorizontalFilters from "./component/listing/horizontalfilters/HorizontalFilters";
import MoreFiltersDrawer from "./component/listing/horizontalfilters/MoreFiltersDrawer";
import ProductGrid from "./component/listing/productgrid/ProductGrid";
import filterData from "./component/listing/horizontalfilters/filterData";

import styles from "./listingpage.module.css";

const createInitialFilters = () => {
    const initialFilters = {};

    filterData.forEach((filter) => {
        initialFilters[filter.id] =
            filter.type === "radio" ? "" : [];
    });

    return initialFilters;
};

const Listingpage = () => {
    const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);

    const [selectedFilters, setSelectedFilters] =
        useState(createInitialFilters);

    const [priceRange, setPriceRange] = useState({
        min: 200,
        max: 10100,
    });

    const [sortBy, setSortBy] = useState("recommended");

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
            <div className={styles.filtersfull}>
                <div className="container">
                    <HorizontalFilters
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        onMoreFilters={() => setMoreFiltersOpen(true)}
                    />
                </div>
            </div>

            <div className="container">
                <Breadcrumbs items={breadcrumb} />
            </div>

            <div className="container">
                <div className={styles.listingWrapper}>
                    <div className={styles.products}>
                        <div className={styles.listingHeading}>
                            <div className={styles.headingLeft}>
                                <h2 className={styles.productTitle}>
                                    Men T-Shirts
                                </h2>

                                <p className={styles.productCount}>
                                    120 Products Found
                                </p>
                            </div>

                            <div className={styles.sortWrapper}>
                                <label
                                    htmlFor="sortBy"
                                    className={styles.sortLabel}
                                >
                                    Sort By:
                                </label>

                                <div className={styles.selectWrapper}>
                                    <select
                                        id="sortBy"
                                        value={sortBy}
                                        onChange={(e) =>
                                            setSortBy(e.target.value)
                                        }
                                        className={styles.sortSelect}
                                    >
                                        <option value="recommended">
                                            Recommended
                                        </option>

                                        <option value="newest">
                                            Newest
                                        </option>

                                        <option value="price-low-high">
                                            Price: Low to High
                                        </option>

                                        <option value="price-high-low">
                                            Price: High to Low
                                        </option>

                                        <option value="discount">
                                            Better Discount
                                        </option>

                                        <option value="rating">
                                            Customer Rating
                                        </option>

                                        <option value="popular">
                                            Most Popular
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <ProductGrid />
                    </div>
                </div>
            </div>

            <MoreFiltersDrawer
                open={moreFiltersOpen}
                onClose={() => setMoreFiltersOpen(false)}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
        </>
    );
};

export default Listingpage;