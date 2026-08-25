"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FiMenu, FiChevronDown, FiSliders } from "react-icons/fi";

import styles from "./horizontalfilters.module.css";
import filterData from "./filterData";
import FilterDropdown from "./FilterDropdown";
import PriceRangeSlider from "./PriceRangeSlider";

const HorizontalFilters = ({
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
  onMoreFilters,
}) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const filterRef = useRef(null);

  const visibleFilters = useMemo(() => filterData.slice(0, 4), []);

  const handleFilterToggle = (filterId) => {
    setActiveFilter((prev) =>
      prev === filterId ? null : filterId
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        setActiveFilter(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleRadioChange = (filterId, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: option,
    }));
  };

  const handleCheckboxChange = (filterId, option) => {
    setSelectedFilters((prev) => {
      const oldValues = prev[filterId] || [];
      const alreadySelected = oldValues.includes(option);

      return {
        ...prev,
        [filterId]: alreadySelected
          ? oldValues.filter((item) => item !== option)
          : [...oldValues, option],
      };
    });
  };

  const handleButtonChange = (filterId, option) => {
    setSelectedFilters((prev) => {
      const oldValues = prev[filterId] || [];
      const alreadySelected = oldValues.includes(option);

      return {
        ...prev,
        [filterId]: alreadySelected
          ? oldValues.filter((item) => item !== option)
          : [...oldValues, option],
      };
    });
  };

  const handleReset = (filterId) => {
    const currentFilter = filterData.find(
      (filter) => filter.id === filterId
    );

    if (!currentFilter) return;

    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: currentFilter.type === "radio" ? "" : [],
    }));
  };

  const handlePriceReset = () => {
    setPriceRange({
      min: 200,
      max: 10100,
    });
  };

  const getSelectedCount = (filter) => {
    const value = selectedFilters[filter.id];

    if (filter.type === "radio") {
      return value ? 1 : 0;
    }

    return Array.isArray(value) ? value.length : 0;
  };

  const isPriceSelected =
    priceRange.min !== 200 || priceRange.max !== 10100;

  return (
    <section className={styles.filterBar} ref={filterRef}>
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
                activeFilter === "price"
                  ? styles.activeFilterButton
                  : ""
              }`}
              onClick={() => handleFilterToggle("price")}
            >
              <span>
                Price
                {isPriceSelected && (
                  <span className={styles.selectedCount}>1</span>
                )}
              </span>

              <FiChevronDown
                className={`${styles.arrow} ${
                  activeFilter === "price" ? styles.arrowOpen : ""
                }`}
              />
            </button>

            {activeFilter === "price" && (
              <div
                className={`${styles.dropdown} ${styles.priceDropdown}`}
              >
                <span className={styles.dropdownArrow} />

                <PriceRangeSlider
                  min={200}
                  max={10100}
                  minValue={priceRange.min}
                  maxValue={priceRange.max}
                  onChange={setPriceRange}
                />

                <div className={styles.dropdownActions}>
                  <button
                    type="button"
                    className={styles.resetButton}
                    onClick={handlePriceReset}
                  >
                    Reset
                  </button>

                  <button
                    type="button"
                    className={styles.applyButton}
                    onClick={() => setActiveFilter(null)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {visibleFilters.map((filter) => {
            const selectedCount = getSelectedCount(filter);
            const isActive = activeFilter === filter.id;

            return (
              <div key={filter.id} className={styles.filterItem}>
                <button
                  type="button"
                  className={`${styles.filterButton} ${
                    isActive ? styles.activeFilterButton : ""
                  }`}
                  onClick={() => handleFilterToggle(filter.id)}
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
                    onRadioChange={handleRadioChange}
                    onCheckboxChange={handleCheckboxChange}
                    onButtonChange={handleButtonChange}
                    onReset={handleReset}
                    onApply={() => setActiveFilter(null)}
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