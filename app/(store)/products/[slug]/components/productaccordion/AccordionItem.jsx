"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import styles from "./productaccordion.module.css";
const AccordionItem =({
  title,
  subtitle,
  Icon,
  content,
})=>{
     const [open, setOpen] = useState(false);
     return (
    <div className={styles.item}>
      <button
        className={styles.header}
        onClick={() => setOpen(!open)}
      >
        {/* Left Side */}
        <div className={styles.headerLeft}>
          <div className={styles.iconBox}>
            <Icon size={22} />
          </div>

          <div className={styles.text}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <FiChevronDown
          className={`${styles.arrow} ${
            open ? styles.rotate : ""
          }`}
        />
      </button>

      <div className={`${styles.content} ${open ? styles.show : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default AccordionItem