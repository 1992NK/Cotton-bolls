"use client";

import styles from "./filterDropdown.module.css";

const FilterDropdown = ({
    filter,
    selectedFilters,
    onRadioChange,
    onCheckboxChange,
    onButtonChange,
    onReset,
    onApply,
}) => {
    const selectedValue = selectedFilters[filter.id];

    return (
        <div className={styles.dropdown}>
            <span className={styles.dropdownArrow} />

            <h4 className={styles.dropdownTitle}>
                {filter.title}
            </h4>

            {filter.type === "radio" && (
                <div className={styles.optionList}>
                    {filter.options.map((option) => (
                        <label
                            key={option}
                            className={styles.radioRow}
                        >
                            <input
                                type="radio"
                                name={filter.id}
                                checked={selectedValue === option}
                                onChange={() =>
                                    onRadioChange(filter.id, option)
                                }
                            />

                            <span className={styles.customRadio} />

                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            )}

            {filter.type === "checkbox" && (
                <div className={styles.optionList}>
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
                                    onCheckboxChange(filter.id, option)
                                }
                            />

                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            )}

            {filter.type === "button" && (
                <div className={styles.buttonOptions}>
                    {filter.options.map((option) => {
                        const active =
                            Array.isArray(selectedValue) &&
                            selectedValue.includes(option);

                        return (
                            <button
                                key={option}
                                type="button"
                                className={`${styles.optionButton} ${
                                    active
                                        ? styles.activeOptionButton
                                        : ""
                                }`}
                                onClick={() =>
                                    onButtonChange(filter.id, option)
                                }
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            )}

            <div className={styles.dropdownActions}>
                <button
                    type="button"
                    className={styles.resetButton}
                    onClick={() => onReset(filter.id)}
                >
                    Reset
                </button>

                <button
                    type="button"
                    className={styles.applyButton}
                    onClick={onApply}
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default FilterDropdown;