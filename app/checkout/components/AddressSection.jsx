import { FiPlus } from "react-icons/fi";

import styles from "./addressSection.module.css";

export default function AddressSection({ onAddAddress }) {
    return (
        <div className={styles.addressWrapper}>
            <button
                type="button"
                className={styles.addAddressButton}
                onClick={onAddAddress}
            >
                <FiPlus />
                <span>Add New Address</span>
            </button>
        </div>
    );
}