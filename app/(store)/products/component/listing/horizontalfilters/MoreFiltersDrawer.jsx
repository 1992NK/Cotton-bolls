"use client";

import { FiChevronUp, FiSliders, FiX } from "react-icons/fi";

import filterData from "./filterData";
import PriceRangeSlider from "./PriceRangeSlider";

import styles from "./morefiltersdrawer.module.css";

const MoreFiltersDrawer = ({
  open,
  onClose,
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
}) => {
  const handleRadioChange = (filterId, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: option,
    }));
  };

  const handleArrayChange = (filterId, option) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[filterId] || [];
      const alreadySelected = currentValues.includes(option);

      return {
        ...prev,
        [filterId]: alreadySelected
          ? currentValues.filter((item) => item !== option)
          : [...currentValues, option],
      };
    });
  };

  const selectedFilterCount = Object.values(selectedFilters).reduce(
    (total, value) => {
      if (Array.isArray(value)) {
        return total + value.length;
      }

      return value ? total + 1 : total;
    },
    0
  );

  const isPriceChanged =
    priceRange.min !== 200 || priceRange.max !== 10100;

  const totalFilterCount =
    selectedFilterCount + (isPriceChanged ? 1 : 0);

  const handleClearAll = () => {
    const clearedFilters = {};

    filterData.forEach((filter) => {
      clearedFilters[filter.id] =
        filter.type === "radio" ? "" : [];
    });

    setSelectedFilters(clearedFilters);
    setPriceRange({
      min: 200,
      max: 10100,
    });
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${
          open ? styles.showOverlay : ""
        }`}
        onClick={onClose}
      />

      <aside
        className={`${styles.drawer} ${
          open ? styles.openDrawer : ""
        }`}
      >
        <div className={styles.drawerHeader}>
          <h2>MORE FILTERS</h2>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close filters"
          >
            <FiX />
          </button>
        </div>

        <div className={styles.drawerContent}>
          <section className={styles.filterSection}>
            <PriceRangeSlider
              min={200}
              max={10100}
              minValue={priceRange.min}
              maxValue={priceRange.max}
              onChange={setPriceRange}
            />
          </section>

          {filterData.map((filter) => {
            const selectedValue = selectedFilters[filter.id];

            return (
              <section
                key={filter.id}
                className={styles.filterSection}
              >
                <div className={styles.sectionHeading}>
                  <span>{filter.title}</span>
                  <FiChevronUp />
                </div>

                {filter.type === "radio" && (
                  <div className={styles.optionsList}>
                    {filter.options.map((option) => (
                      <label
                        key={option}
                        className={styles.radioRow}
                      >
                        <input
                          type="radio"
                          name={`drawer-${filter.id}`}
                          checked={selectedValue === option}
                          onChange={() =>
                            handleRadioChange(filter.id, option)
                          }
                        />

                        <span className={styles.customRadio} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {filter.type === "checkbox" && (
                  <div className={styles.optionsList}>
                    {filter.options.map((option) => (
                      <label
                        key={option}
                        className={styles.checkboxRow}
                      >
                        <input
                          type="checkbox"
                          checked={
                            Array.isArray(selectedValue) &&
                            selectedValue.includes(option)
                          }
                          onChange={() =>
                            handleArrayChange(filter.id, option)
                          }
                        />

                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {filter.type === "button" && (
                  <div className={styles.buttonList}>
                    {filter.options.map((option) => {
                      const active =
                        Array.isArray(selectedValue) &&
                        selectedValue.includes(option);

                      return (
                        <button
                          key={option}
                          type="button"
                          className={`${styles.sizeButton} ${
                            active ? styles.activeSize : ""
                          }`}
                          onClick={() =>
                            handleArrayChange(filter.id, option)
                          }
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <div className={styles.drawerFooter}>
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClearAll}
          >
            Clear All
          </button>

          <button
            type="button"
            className={styles.applyButton}
            onClick={onClose}
          >
            <FiSliders />
            <span>Apply Filters</span>

            {totalFilterCount > 0 && (
              <span>({totalFilterCount})</span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default MoreFiltersDrawer;