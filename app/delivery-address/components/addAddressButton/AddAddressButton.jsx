import styles from "./addAddressButton.module.css";

const AddAddressButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className={styles.addAddressButton}
      onClick={onClick}
    >
      <span className={styles.plusIcon}>+</span>
      <span>Add New Address</span>
    </button>
  );
};

export default AddAddressButton;