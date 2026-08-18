"use client";

import { useState } from "react";
import styles from "./savedAddress.module.css";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";


const initialAddresses = [
  {
    id: 1,
    type: "HOME",
    name: "Neeraj Katiyar",
    address:
      "House No. 123, Street No. 5, Near Main Market",
    area: "Shalimar Bagh",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110088",
    mobile: "9876543210",
    isDefault: true,
  },
  {
    id: 2,
    type: "WORK",
    name: "Neeraj Katiyar",
    address:
      "Office No. 204, Second Floor, Business Tower",
    area: "Pitampura",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110034",
    mobile: "9876543210",
    isDefault: false,
  },
];

export default function SavedAddressPage() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const [formData, setFormData] = useState({
    type: "HOME",
    name: "",
    address: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      type: "HOME",
      name: "",
      address: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
      mobile: "",
    });

    setEditingAddress(null);
  };

  const handleAddNew = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);

    setFormData({
      type: address.type,
      name: address.name,
      address: address.address,
      area: address.area,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      mobile: address.mobile,
    });

    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (!confirmDelete) return;

    setAddresses((prev) =>
      prev.filter((address) => address.id !== id)
    );
  };

  const handleDefault = (id) => {
    setAddresses((prev) =>
      prev.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.address ||
      !formData.area ||
      !formData.city ||
      !formData.state ||
      !formData.pincode ||
      !formData.mobile
    ) {
      alert("Please fill all the details.");
      return;
    }

    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((address) =>
          address.id === editingAddress.id
            ? {
                ...address,
                ...formData,
              }
            : address
        )
      );
    } else {
      const newAddress = {
        id: Date.now(),
        ...formData,
        isDefault: addresses.length === 0,
      };

      setAddresses((prev) => [...prev, newAddress]);
    }

    setShowForm(false);
    resetForm();
  };

  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            Home <span>/</span> Saved Addresses
          </div>

          <div className={styles.layout}>
            {/* LEFT SIDE */}
            <section className={styles.addressSection}>
              <div className={styles.sectionHeader}>
                <div>
                  <h1>Saved Addresses</h1>
                  <p>
                    Manage your saved delivery addresses
                  </p>
                </div>

                <button
                  className={styles.addButton}
                  onClick={handleAddNew}
                >
                  <span>+</span>
                  Add New Address
                </button>
              </div>

              {addresses.length === 0 ? (
                <div className={styles.emptyAddress}>
                  <div className={styles.emptyIcon}>⌂</div>

                  <h2>No Saved Address</h2>

                  <p>
                    You don't have any saved addresses yet.
                  </p>

                  <button
                    className={styles.emptyButton}
                    onClick={handleAddNew}
                  >
                    Add New Address
                  </button>
                </div>
              ) : (
                <div className={styles.addressList}>
                  {addresses.map((item) => (
                    <div
                      className={`${styles.addressCard} ${
                        item.isDefault
                          ? styles.defaultCard
                          : ""
                      }`}
                      key={item.id}
                    >
                      <div className={styles.cardTop}>
                        <div className={styles.addressType}>
                          <span className={styles.homeIcon}>
                            {item.type === "WORK" ? "▣" : "⌂"}
                          </span>

                          <strong>{item.type}</strong>

                          {item.isDefault && (
                            <span className={styles.defaultBadge}>
                              DEFAULT
                            </span>
                          )}
                        </div>

                        <div className={styles.cardActions}>
                          <button
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>

                          <span>|</span>

                          <button
                            className={styles.deleteButton}
                            onClick={() =>
                              handleDelete(item.id)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className={styles.addressContent}>
                        <h3>{item.name}</h3>

                        <p>{item.address}</p>

                        <p>
                          {item.area}, {item.city}
                        </p>

                        <p>
                          {item.state} - {item.pincode}
                        </p>

                        <div className={styles.mobile}>
                          <strong>Mobile:</strong>{" "}
                          {item.mobile}
                        </div>
                      </div>

                      {!item.isDefault && (
                        <button
                          className={styles.defaultButton}
                          onClick={() =>
                            handleDefault(item.id)
                          }
                        >
                          Make this default
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* ADD / EDIT ADDRESS MODAL */}
      {showForm && (
        <div
          className={styles.overlay}
          onClick={() => setShowForm(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <h2>
                  {editingAddress
                    ? "Edit Address"
                    : "Add New Address"}
                </h2>

                <p>
                  Enter your complete delivery details
                </p>
              </div>

              <button
                className={styles.closeButton}
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              {/* ADDRESS TYPE */}
              <div className={styles.inputGroup}>
                <label>Address Type</label>

                <div className={styles.typeButtons}>
                  <button
                    type="button"
                    className={
                      formData.type === "HOME"
                        ? styles.activeType
                        : ""
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        type: "HOME",
                      }))
                    }
                  >
                    ⌂ Home
                  </button>

                  <button
                    type="button"
                    className={
                      formData.type === "WORK"
                        ? styles.activeType
                        : ""
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        type: "WORK",
                      }))
                    }
                  >
                    ▣ Work
                  </button>
                </div>
              </div>

              {/* NAME + MOBILE */}
              <div className={styles.twoColumn}>
                <div className={styles.inputGroup}>
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Mobile Number</label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    maxLength="10"
                  />
                </div>
              </div>

              {/* ADDRESS */}
              <div className={styles.inputGroup}>
                <label>Complete Address</label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House No., Building, Street, etc."
                  rows="3"
                />
              </div>

              {/* AREA */}
              <div className={styles.inputGroup}>
                <label>Area / Locality</label>

                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Enter area / locality"
                />
              </div>

              {/* CITY / STATE / PINCODE */}
              <div className={styles.threeColumn}>
                <div className={styles.inputGroup}>
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>State</label>

                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Pincode</label>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    maxLength="6"
                  />
                </div>
              </div>

              <button
                type="submit"
                className={styles.saveButton}
              >
                {editingAddress
                  ? "Update Address"
                  : "Save Address"}
              </button>
            </form>
          </div>
        </div>
      )}

    <Footer />
      
    </>
  );
}