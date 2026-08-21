import { FiCheck } from "react-icons/fi";

import styles from "./radio.module.css";

const Radio = ({ active }) => {
    return (
        <span
            className={`${styles.radio} ${
                active ? styles.radioActive : ""
            }`}
        >
            {active && <FiCheck />}
        </span>
    );
};

export default Radio;