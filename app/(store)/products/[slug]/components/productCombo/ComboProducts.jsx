"use client";

import { useState } from "react";
import ComboCard from "./ComboCard";
import comboData from "./comboData";
import styles from "./comboproducts.module.css";

const ComboProducts = ({ product }) => {
  const [selectedCombo, setSelectedCombo] = useState(null);

  if (!product) return null;

  return (
    <section className={styles.comboSection}>
      <div className={styles.heading}>
        <h2>Complete Your Look</h2>
        <p>Pair this product with these items</p>
      </div>

      <div className={styles.comboGrid}>
        {comboData.map((item) => (
          <ComboCard
            key={item.id}
            item={item}
            product={product}
            selectedCombo={selectedCombo}
            setSelectedCombo={setSelectedCombo}
          />
        ))}
      </div>
    </section>
  );
};

export default ComboProducts;