"use client";
import styles from './reviewFilter.module.css'

import { useState } from "react";
const ReviewFilter = () => {
    const [active, setActive] = useState("helpful");
    return (

        <div className={styles.filter}>

            <button
                className={active === "helpful" ? styles.active : ""}
                onClick={() => setActive("helpful")}
            >
                Most Helpful
            </button>

            <button
                className={active === "recent" ? styles.active : ""}
                onClick={() => setActive("recent")}
            >
                Most Recent
            </button>

        </div>

    )

}

export default ReviewFilter