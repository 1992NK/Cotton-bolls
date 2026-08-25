"use client";

import styles from "./pricerangeslider.module.css";

const PriceRangeSlider = ({
  min = 200,
  max = 10100,
  step = 100,
  minValue,
  maxValue,
  onChange,
}) => {
  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  const handleMinChange = (e) => {
    const value = Number(e.target.value);

    if (value >= maxValue) return;

    onChange({
      min: Math.min(value, maxValue - step),
      max: maxValue,
    });
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);

    if (value <= minValue) return;

    onChange({
      min: minValue,
      max: Math.max(value, minValue + step),
    });
  };

  return (
    <div className={styles.priceRangeBox}>
      <h4 className={styles.title}>PRICE</h4>

      <div className={styles.sliderWrapper}>
        <div className={styles.track} />

        <div
          className={styles.activeTrack}
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className={`${styles.rangeInput} ${styles.minRange}`}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className={`${styles.rangeInput} ${styles.maxRange}`}
        />
      </div>

      <p className={styles.priceText}>
        ₹{minValue.toLocaleString("en-IN")} - ₹
        {maxValue.toLocaleString("en-IN")}
        {maxValue === max ? "+" : ""}
      </p>
    </div>
  );
};

export default PriceRangeSlider;