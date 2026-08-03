"use client";
import { useState } from "react";
import styles from './filterSidebar.module.css'
import { FaCaretDown } from "react-icons/fa";

const FilterSection = ({
    title,
    options,
    type,
}) => {
    const [open, setOpen] = useState(true);
    // Radio filter (Availability)
    const [selectedRadio, setSelectedRadio] = useState("");

    // Checkbox filters (Material, Recommendation, etc.)
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    // Size buttons
    const [selectedSize, setSelectedSize] = useState("");

    const handleCheckbox = (value) => {
        if (selectedCheckboxes.includes(value)) {
            setSelectedCheckboxes(
                selectedCheckboxes.filter((item) => item !== value)
            );
        } else {
            setSelectedCheckboxes([...selectedCheckboxes, value]);
        }
    };
    return (
        <div className={styles.section}>
            {/* Heading */}
            <div
                className={styles.heading}
                onClick={() => setOpen(!open)}
            >
                <span>{title}</span>

                <span
                    className={`${styles.arrow} ${open ? styles.rotate : ""
                        }`}
                >
                    <FaCaretDown size={15} />
                </span>
            </div>

            {/* Content */}
            <div
                className={`${styles.content} ${open ? styles.open : styles.close
                    }`}
            >
                {/* Radio */}
                {type === "radio" &&
                    options.map((item) => (
                        <label key={item} className={styles.checkbox}>
                            <input
                                type="radio"
                                name={title}
                                value={item}
                                checked={selectedRadio === item}
                                onChange={(e) => setSelectedRadio(e.target.value)}
                            />
                            {item}
                        </label>
                    ))}

                {/* Checkbox */}
                {type === "checkbox" &&
                    options.map((item) => (
                        <label key={item} className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={selectedCheckboxes.includes(item)}
                                onChange={() => handleCheckbox(item)}
                            />
                            {item}
                        </label>
                    ))}

                {/* Size */}
                {type === "button" && (
                    <div className={styles.sizeWrap}>
                        {options.map((size) => (
                            <button
                                key={size}
                                className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ""
                                    }`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FilterSection