"use client";

import { useEffect, useRef, useState } from "react";
import { FiMenu, FiChevronDown, FiSliders } from "react-icons/fi";
import styles from "./horizontalfilters.module.css";
import filterData from "./filterData";
import FilterDropdown from "./FilterDropdown";
import PriceRangeSlider from "./PriceRangeSlider";

const MIN = 200;
const MAX = 10100;

const HorizontalFilters = ({
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
  onMoreFilters,
}) => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const filters = filterData.slice(0, 4);

  const toggle = (id) => setActive((prev) => (prev === id ? null : id));

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setActive(null);
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const select = (id, option, radio = false) => {
    setSelectedFilters((prev) => {
      if (radio) return { ...prev, [id]: option };

      const values = prev[id] || [];

      return {
        ...prev,
        [id]: values.includes(option)
          ? values.filter((item) => item !== option)
          : [...values, option],
      };
    });
  };

  const reset = (filter) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter.id]: filter.type === "radio" ? "" : [],
    }));
  };

  const count = (filter) => {
    const value = selectedFilters[filter.id];
    return filter.type === "radio" ? (value ? 1 : 0) : value?.length || 0;
  };

  const priceSelected =
    priceRange.min !== MIN || priceRange.max !== MAX;

  return (
    <section className={styles.filterBar} ref={ref}>
      <div className={styles.filterContainer}>
        <button
          type="button"
          className={styles.mainFilterButton}
          onClick={onMoreFilters}
        >
          <FiMenu />
          <span>FILTERS</span>
        </button>

        <div className={styles.horizontalList}>
          <div className={styles.filterItem}>
            <button
              type="button"
              className={`${styles.filterButton} ${
                active === "price" ? styles.activeFilterButton : ""
              }`}
              onClick={() => toggle("price")}
            >
              <span>
                Price
                {priceSelected && (
                  <span className={styles.selectedCount}>1</span>
                )}
              </span>

              <FiChevronDown
                className={`${styles.arrow} ${
                  active === "price" ? styles.arrowOpen : ""
                }`}
              />
            </button>

            {active === "price" && (
              <div className={`${styles.dropdown} ${styles.priceDropdown}`}>
                <span className={styles.dropdownArrow} />

                <PriceRangeSlider
                  min={MIN}
                  max={MAX}
                  minValue={priceRange.min}
                  maxValue={priceRange.max}
                  onChange={setPriceRange}
                />

                <div className={styles.dropdownActions}>
                  <button
                    type="button"
                    className={styles.resetButton}
                    onClick={() => setPriceRange({ min: MIN, max: MAX })}
                  >
                    Reset
                  </button>

                  <button
                    type="button"
                    className={styles.applyButton}
                    onClick={() => setActive(null)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {filters.map((filter) => {
            const isActive = active === filter.id;
            const selectedCount = count(filter);

            return (
              <div key={filter.id} className={styles.filterItem}>
                <button
                  type="button"
                  className={`${styles.filterButton} ${
                    isActive ? styles.activeFilterButton : ""
                  }`}
                  onClick={() => toggle(filter.id)}
                >
                  <span>
                    {filter.title}
                    {selectedCount > 0 && (
                      <span className={styles.selectedCount}>
                        {selectedCount}
                      </span>
                    )}
                  </span>

                  <FiChevronDown
                    className={`${styles.arrow} ${
                      isActive ? styles.arrowOpen : ""
                    }`}
                  />
                </button>

                {isActive && (
                  <FilterDropdown
                    filter={filter}
                    selectedFilters={selectedFilters}
                    onRadioChange={(id, option) =>
                      select(id, option, true)
                    }
                    onCheckboxChange={select}
                    onButtonChange={select}
                    onReset={() => reset(filter)}
                    onApply={() => setActive(null)}
                  />
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className={styles.moreFiltersButton}
          onClick={onMoreFilters}
        >
          <span>More Filters</span>
          <FiSliders />
        </button>
      </div>
    </section>
  );
};

export default HorizontalFilters;