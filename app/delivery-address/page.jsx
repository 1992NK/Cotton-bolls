"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import BillingDetails from "../checkout/components/billingdetail/BillingDetails";
import AddAddressModal from "./components/addAddressModal/AddAddressModal";
import AddressSection from "./components/addressSection/AddressSection";

import styles from "./deliveryAddress.module.css";

import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import CheckoutStepper from "@/checkout/components/checkoutStepper/CheckoutStepper";

const DeliveryAddressPage = () => {
  const router = useRouter();

  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddAddress = () => {
    setEditingAddress(null);
    setShowAddressModal(true);
  };

  const handleAddressConfirm = (addressData) => {
    if (editingAddress) {
      const updatedAddress = {
        ...addressData,
        id: editingAddress.id,
      };

      setAddresses((prev) =>
        prev.map((address) =>
          address.id === editingAddress.id
            ? updatedAddress
            : address
        )
      );

      if (selectedAddress?.id === editingAddress.id) {
        setSelectedAddress(updatedAddress);
      }

      setEditingAddress(null);
      setShowAddressModal(false);
      return;
    }

    const newAddress = {
      ...addressData,
      id: Date.now(),
    };

    setAddresses((prev) => [...prev, newAddress]);
    setSelectedAddress(newAddress);
    setShowAddressModal(false);
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setShowAddressModal(true);
  };

  const handleDeleteAddress = (id) => {
    const updatedAddresses = addresses.filter(
      (address) => address.id !== id
    );

    setAddresses(updatedAddresses);

    if (selectedAddress?.id === id) {
      setSelectedAddress(
        updatedAddresses.length > 0
          ? updatedAddresses[0]
          : null
      );
    }
  };

  const handleContinuePayment = () => {
    if (!selectedAddress) {
      alert("Please select a delivery address.");
      return;
    }

    router.push("/payment");
  };

  return (
    <>
      <Header />

      <section className={styles.stepperbg}>
        <div className="container">
          <CheckoutStepper />
        </div>
      </section>

      <section className={styles.deliveryPage}>
        <div className="container">
          <div className={styles.deliveryRow}>
            <AddressSection
              addresses={addresses}
              selectedAddress={selectedAddress}
              onAddAddress={handleAddAddress}
              onSelectAddress={handleSelectAddress}
              onEditAddress={handleEditAddress}
              onDeleteAddress={handleDeleteAddress}
            />

            <BillingDetails
              cartTotal={2698}
              memberSavings={200}
              codCharges={29}
              shippingCharges={50}
              isCOD={false}
              /* onPlaceOrder={handlePlaceOrder} */
            />
          </div>
        </div>
      </section>

      {showAddressModal && (
        <AddAddressModal
          editingAddress={editingAddress}
          onClose={() => {
            setShowAddressModal(false);
            setEditingAddress(null);
          }}
          onConfirm={handleAddressConfirm}
        />
      )}

      <Footer />
    </>
  );
};

export default DeliveryAddressPage;