"use client";

import Image from "next/image";
import styles from './colorselector.module.css'

export default function ColorSelector({
  colors,
  selectedColor,
  setSelectedColor,
}) {
  return (
    <div className={styles.multiplecolor}>
      <h3 style={{ marginBottom: "12px" }}>
        Colour :
        <strong> {selectedColor.name}</strong>
      </h3>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        {colors.map((color) => (
          <div
            key={color.id}
            onClick={() => setSelectedColor(color)}
            style={{
              border:
                selectedColor.id === color.id
                  ? "2px solid #000"
                  : "1px solid #ddd",
              borderRadius: "8px",
              padding: "3px",
              cursor: "pointer",
            }}
          >
            <Image
              src={color.thumbnail}
              alt={color.name}
              width={60}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
}