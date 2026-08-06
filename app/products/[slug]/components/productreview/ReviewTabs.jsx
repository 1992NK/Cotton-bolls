"use client";
import { useState } from "react";
import styles from "./reviewTabs.module.css"
const ReviewTabs = () => {
    const [active, setActive] = useState("product");
    return (

        <div className={styles.tabs}>

            <button
                className={active === "product" ? styles.active : ""}
                onClick={() => setActive("product")}
            >
                Product Reviews
            </button>

            <button
                className={active === "brand" ? styles.active : ""}
                onClick={() => setActive("brand")}
            >
                Brand Reviews
            </button>

        </div>

    )

}

export default ReviewTabs