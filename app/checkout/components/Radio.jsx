import { FiCheck } from "react-icons/fi";

import styles from "./radio.module.css";

export default function Radio({ active }) {
    return (
        <span
            className={`${styles.radio} ${
                active ? styles.radioActive : ""
            }`}
        >
            {active && <FiCheck />}
        </span>
    );
}