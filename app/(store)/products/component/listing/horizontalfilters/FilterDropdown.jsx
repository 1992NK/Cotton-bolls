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

    const colors = {
        Orange: "#ff7a00",
        Black: "#000000",
        White: "#ffffff",
        Blue: "#2563eb",
        Green: "#16a34a",
    };

    return (
        <div className={styles.dropdown}>
            <span className={styles.dropdownArrow} />

            {filter.type === "radio" && (
                <div className={styles.optionList}>
                    {filter.options.map((option) => (
                        <label key={option} className={styles.radioRow}>
                            <input type="radio" name={filter.id} checked={selectedValue === option} onChange={() => onRadioChange(filter.id, option)} />
                            <span className={styles.customRadio} />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            )}

            {filter.type === "checkbox" && (
                <div className={styles.optionList}>
                    {filter.options.map((option) => (
                        <label key={option} className={styles.checkboxRow}>
                            <input type="checkbox" checked={Array.isArray(selectedValue) && selectedValue.includes(option)} onChange={() => onCheckboxChange(filter.id, option)} />
                            {filter.id === "colors" && (
                                <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: colors[option], border: option === "White" ? "1px solid #ccc" : "1px solid transparent", flexShrink: 0 }} />
                            )}
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            )}

            {filter.type === "button" && (
                <div className={styles.buttonOptions}>
                    {filter.options.map((option) => {
                        const active = Array.isArray(selectedValue) && selectedValue.includes(option);

                        return (
                            <button key={option} type="button" className={`${styles.optionButton} ${active ? styles.activeOptionButton : ""}`} onClick={() => onButtonChange(filter.id, option)}>
                                {option}
                            </button>
                        );
                    })}
                </div>
            )}

            <div className={styles.dropdownActions}>
                <button type="button" className={styles.resetButton} onClick={() => onReset(filter.id)}>
                    Reset
                </button>
                <button type="button" className={styles.applyButton} onClick={onApply}>
                    Apply
                </button>
            </div>
        </div>
    );
};

export default FilterDropdown;