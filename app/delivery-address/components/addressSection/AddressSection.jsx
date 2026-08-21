import AddAddressButton from "../addAddressButton/AddAddressButton";
import AddressCard from "../addressCard/AddressCard";

import styles from "./addressSection.module.css";

const AddressSection = ({
  addresses,
  selectedAddress,
  onAddAddress,
  onSelectAddress,
  onEditAddress,
  onDeleteAddress,
}) => {
  return (
    <section className={styles.deliverySection}>
      <h2 className={styles.deliveryTitle}>Delivery To</h2>

      <AddAddressButton onClick={onAddAddress} />

      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          isSelected={selectedAddress?.id === address.id}
          onSelect={onSelectAddress}
          onEdit={onEditAddress}
          onDelete={onDeleteAddress}
        />
      ))}
    </section>
  );
};

export default AddressSection;