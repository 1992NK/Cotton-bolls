"use client";

import { FiCheck, FiEdit2, FiTrash2 } from "react-icons/fi";

import styles from "./addressCard.module.css";

const AddressCard = ({
  address,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className={`${styles.addressCard} ${
        isSelected ? styles.selectedAddressCard : ""
      }`}
    >
      <div className={styles.addressTop}>
        <button
          type="button"
          className={`${styles.checkBox} ${
            isSelected ? styles.checked : ""
          }`}
          onClick={() => onSelect(address)}
        >
          {isSelected && <FiCheck />}
        </button>

        <div className={styles.nameSection}>
          <strong>{address.name}</strong>
          <span>({address.addressType})</span>
        </div>
      </div>

      <div className={styles.addressDetails}>
        {address.address && <p>{address.address}</p>}

        {address.area && (
          <p>
            {address.area}
            {address.landmark ? `, ${address.landmark}` : ""}
          </p>
        )}

        <p>
          {address.city} - {address.pincode}
        </p>

        <p>{address.state},</p>

        {address.mobile && (
          <p>
            Mobile: <strong>{address.mobile}</strong>
          </p>
        )}
      </div>

      <div className={styles.addressDivider} />

      <div className={styles.addressActions}>
        <button type="button" onClick={() => onEdit(address)}>
          <FiEdit2 />
          <span>Edit</span>
        </button>

        <div className={styles.actionDivider} />

        <button
          type="button"
          onClick={() => onDelete(address.id)}
        >
          <FiTrash2 />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default AddressCard;