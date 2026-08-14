"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FiCheck,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import BillingDetails from "../checkout/components/billingdetail/BillingDetails";
import AddAddressModal from "./components/AddAddressModal";

import styles from "./deliveryAddress.module.css";

import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

export default function DeliveryAddressPage() {

  const router = useRouter();

  /* =========================================
     MODAL
  ========================================= */

  const [showAddressModal, setShowAddressModal] =
    useState(false);


  /* =========================================
     SAVED ADDRESSES
  ========================================= */

  const [addresses, setAddresses] = useState([]);


  /* =========================================
     EDIT ADDRESS
     null = add new address
     object = edit existing address
  ========================================= */

  const [editingAddress, setEditingAddress] =
    useState(null);


  /* =========================================
     SELECTED ADDRESS
  ========================================= */

  const [selectedAddress, setSelectedAddress] =
    useState(null);


  /* =========================================
     ADD NEW ADDRESS
  ========================================= */

  const handleAddAddress = () => {

    setEditingAddress(null);

    setShowAddressModal(true);
  };


  /* =========================================
     SAVE / UPDATE ADDRESS
  ========================================= */

  const handleAddressConfirm = (addressData) => {

    /* =====================================
       EDIT EXISTING ADDRESS
    ===================================== */

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


      /* Update selected address also */

      if (
        selectedAddress?.id ===
        editingAddress.id
      ) {
        setSelectedAddress(updatedAddress);
      }


      setEditingAddress(null);

      setShowAddressModal(false);

      return;
    }


    /* =====================================
       ADD NEW ADDRESS
    ===================================== */

    const newAddress = {
      ...addressData,
      id: Date.now(),
    };

    setAddresses((prev) => [
      ...prev,
      newAddress,
    ]);

    setSelectedAddress(newAddress);

    setShowAddressModal(false);
  };


  /* =========================================
     SELECT ADDRESS
  ========================================= */

  const handleSelectAddress = (address) => {

    setSelectedAddress(address);

  };


  /* =========================================
     EDIT ADDRESS
  ========================================= */

  const handleEditAddress = (address) => {

    /*
      Existing address ko modal mein bhejenge
    */

    setEditingAddress(address);

    setShowAddressModal(true);
  };


  /* =========================================
     DELETE ADDRESS
  ========================================= */

  const handleDeleteAddress = (id) => {

    const updatedAddresses =
      addresses.filter(
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


  /* =========================================
     CONTINUE TO PAYMENT
  ========================================= */

  const handleContinuePayment = () => {

    if (!selectedAddress) {

      alert(
        "Please select a delivery address."
      );

      return;
    }

    router.push("/payment");
  };


  return (
    <>
      <Header />

      <section className={styles.deliveryPage}>

        <div className="container">

          <div className={styles.deliveryRow}>

            {/* =================================
                LEFT - DELIVERY ADDRESS
            ================================= */}

            <section className={styles.deliverySection}>

              <h2 className={styles.deliveryTitle}>
                Delivery To
              </h2>


              {/* =================================
                  ADD NEW ADDRESS
              ================================= */}

              <button
                type="button"
                className={styles.addAddressButton}
                onClick={handleAddAddress}
              >

                <span className={styles.plusIcon}>
                  +
                </span>

                <span>
                  Add New Address
                </span>

              </button>


              {/* =================================
                  SAVED ADDRESSES
              ================================= */}

              {addresses.map((address) => (

                <div
                  key={address.id}
                  className={`${styles.addressCard} ${
                    selectedAddress?.id === address.id
                      ? styles.selectedAddressCard
                      : ""
                  }`}
                >

                  {/* =================================
                      ADDRESS TOP
                  ================================= */}

                  <div className={styles.addressTop}>

                    <button
                      type="button"
                      className={`${styles.checkBox} ${
                        selectedAddress?.id === address.id
                          ? styles.checked
                          : ""
                      }`}
                      onClick={() =>
                        handleSelectAddress(address)
                      }
                    >

                      {selectedAddress?.id === address.id && (
                        <FiCheck />
                      )}

                    </button>


                    <div className={styles.nameSection}>

                      <strong>
                        {address.name}
                      </strong>

                      <span>
                        ({address.addressType})
                      </span>

                    </div>

                  </div>


                  {/* =================================
                      ADDRESS DETAILS
                  ================================= */}

                  <div className={styles.addressDetails}>

                    {address.address && (
                      <p>
                        {address.address}
                      </p>
                    )}

                    {address.area && (
                      <p>
                        {address.area}

                        {address.landmark
                          ? `, ${address.landmark}`
                          : ""}
                      </p>
                    )}

                    <p>
                      {address.city} -{" "}
                      {address.pincode}
                    </p>

                    <p>
                      {address.state},
                    </p>

                    {address.mobile && (
                      <p>
                        Mobile:{" "}
                        <strong>
                          {address.mobile}
                        </strong>
                      </p>
                    )}

                  </div>


                  {/* =================================
                      DIVIDER
                  ================================= */}

                  <div
                    className={
                      styles.addressDivider
                    }
                  />


                  {/* =================================
                      EDIT / DELETE
                  ================================= */}

                  <div
                    className={
                      styles.addressActions
                    }
                  >

                    <button
                      type="button"
                      onClick={() =>
                        handleEditAddress(address)
                      }
                    >

                      <FiEdit2 />

                      <span>
                        Edit
                      </span>

                    </button>


                    <div
                      className={
                        styles.actionDivider
                      }
                    />


                    <button
                      type="button"
                      onClick={() =>
                        handleDeleteAddress(
                          address.id
                        )
                      }
                    >

                      <FiTrash2 />

                      <span>
                        Delete
                      </span>

                    </button>

                  </div>

                </div>

              ))}

            </section>


            {/* =================================
                RIGHT - BILLING DETAILS
            ================================= */}

            <BillingDetails
              buttonText="CONTINUE TO PAYMENT"
              onButtonClick={
                handleContinuePayment
              }
            />

          </div>

        </div>

      </section>


      {/* =================================
          ADD / EDIT ADDRESS MODAL
      ================================= */}

      {showAddressModal && (

        <AddAddressModal
          editingAddress={editingAddress}

          onClose={() => {

            setShowAddressModal(false);

            setEditingAddress(null);

          }}

          onConfirm={
            handleAddressConfirm
          }
        />

      )}


      <Footer />

    </>
  );
}