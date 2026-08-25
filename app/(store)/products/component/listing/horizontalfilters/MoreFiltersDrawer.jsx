"use client";

import { FiChevronUp, FiSliders, FiX } from "react-icons/fi";

import filterData from "./filterData";
import PriceRangeSlider from "./PriceRangeSlider";
import styles from "./morefiltersdrawer.module.css";

const MIN = 200;
const MAX = 10100;

const MoreFiltersDrawer = ({
  open,
  onClose,
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
}) => {
  const updateFilter = (id, option, multiple) => {
    setSelectedFilters((prev) => {
      if (!multiple) return { ...prev, [id]: option };

      const values = prev[id] || [];

      return {
        ...prev,
        [id]: values.includes(option)
          ? values.filter((item) => item !== option)
          : [...values, option],
      };
    });
  };

  const clearAll = () => {
    setSelectedFilters(
      Object.fromEntries(
        filterData.map(({ id, type }) => [
          id,
          type === "radio" ? "" : [],
        ])
      )
    );

    setPriceRange({ min: MIN, max: MAX });
  };

  const count =
    Object.values(selectedFilters).flat().filter(Boolean).length +
    (priceRange.min !== MIN || priceRange.max !== MAX ? 1 : 0);

  const renderOptions = ({ id, type, options }) => {
    const selected = selectedFilters[id];

    if (type === "radio")
      return options.map((option) => (
        <label key={option} className={styles.radioRow}>
          <input
            type="radio"
            name={id}
            checked={selected === option}
            onChange={() => updateFilter(id, option)}
          />
          <span className={styles.customRadio} />
          <span>{option}</span>
        </label>
      ));

    if (type === "checkbox")
      return options.map((option) => (
        <label key={option} className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={selected?.includes(option)}
            onChange={() => updateFilter(id, option, true)}
          />
          <span>{option}</span>
        </label>
      ));

    return options.map((option) => (
      <button
        key={option}
        type="button"
        className={`${styles.sizeButton} ${
          selected?.includes(option) ? styles.activeSize : ""
        }`}
        onClick={() => updateFilter(id, option, true)}
      >
        {option}
      </button>
    ));
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.showOverlay : ""}`}
        onClick={onClose}
      />

      <aside
        className={`${styles.drawer} ${open ? styles.openDrawer : ""}`}
      >
        <div className={styles.drawerHeader}>
          <h2>MORE FILTERS</h2>

          <button
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
              min={MIN}
              max={MAX}
              minValue={priceRange.min}
              maxValue={priceRange.max}
              onChange={setPriceRange}
            />
          </section>

          {filterData.map((filter) => (
            <section
              key={filter.id}
              className={styles.filterSection}
            >
              <div className={styles.sectionHeading}>
                <span>{filter.title}</span>
                <FiChevronUp />
              </div>

              <div
                className={
                  filter.type === "button"
                    ? styles.buttonList
                    : styles.optionsList
                }
              >
                {renderOptions(filter)}
              </div>
            </section>
          ))}
        </div>

        <div className={styles.drawerFooter}>
          <button
            className={styles.clearButton}
            onClick={clearAll}
          >
            Clear All
          </button>

          <button
            className={styles.applyButton}
            onClick={onClose}
          >
            <FiSliders />

            <span>
              Apply Filters
              {count > 0 && ` (${count})`}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default MoreFiltersDrawer;