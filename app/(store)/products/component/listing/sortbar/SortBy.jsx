"use client";

import { useState } from "react";
import styles from "./sortby.module.css";

const SortBy = () => {
    const [sortBy, setSortBy] = useState("recommended");

    return (
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
                    onChange={(e) => setSortBy(e.target.value)}
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
    );
};

export default SortBy;