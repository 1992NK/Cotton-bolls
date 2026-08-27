"use client";

import { useState } from "react";
import {
    FiSearch,
    FiX,
    FiMapPin,
    FiPlus,
    FiMinus,
    FiArrowLeft,
    FiChevronDown,
} from "react-icons/fi";
import styles from "./addAddressModal.module.css";

const AddAddressModal = ({ onClose, onConfirm, editingAddress }) => {
    const [step, setStep] = useState("location");
    const [search, setSearch] = useState("");

    const [location, setLocation] = useState({
        pincode: "1777",
        address: "Friends Colony, Kurla West, Kurla, Mumbai, 400070",
    });

    const [formData, setFormData] = useState({
        address: editingAddress?.address || "",
        area: editingAddress?.area || "Kurla",
        landmark: editingAddress?.landmark || "",
        pincode: editingAddress?.pincode || "400070",
        city: editingAddress?.city || "Mumbai",
        country: editingAddress?.country || "India",
        state: editingAddress?.state || "Maharashtra",
        name: editingAddress?.name || "",
        countryCode: editingAddress?.countryCode || "+91",
        mobile: editingAddress?.mobile || "",
        addressType: editingAddress?.addressType || "Other",
        defaultAddress: editingAddress?.defaultAddress || false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleConfirmLocation = () => {
        setStep("details");
    };

    const handleBack = () => {
        setStep("location");
    };

    const handleSaveAddress = () => {
        const finalAddress = { ...location, ...formData };
        console.log("Final Address:", finalAddress);

        if (onConfirm) {
            onConfirm(finalAddress);
        }

        onClose();
    };

    if (step === "location") {
        return (
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        <h2>Add Address</h2>
                        <button type="button" className={styles.closeButton} onClick={onClose}>
                            <FiX />
                        </button>
                    </div>

                    <div className={styles.searchWrapper}>
                        <FiSearch className={styles.searchIcon} />
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for area, street name, locality..." />
                    </div>

                    <div className={styles.locationWarning}>
                        <FiMapPin />
                        <span>Location access is blocked. To use your current location, enable it in your browser settings and refresh.</span>
                    </div>

                    <div className={styles.mapContainer}>
                        <iframe title="Delivery Location" src="https://www.openstreetmap.org/export/embed.html?bbox=72.854%2C19.065%2C72.895%2C19.105&layer=mapnik&marker=19.085%2C72.878" className={styles.map} />
                        <div className={styles.centerPin}>
                            <div className={styles.pinOuter}>
                                <FiMapPin />
                            </div>
                        </div>
                        <div className={styles.zoomControls}>
                            <button type="button">
                                <FiPlus />
                            </button>
                            <button type="button">
                                <FiMinus />
                            </button>
                        </div>
                    </div>

                    <div className={styles.locationDetails}>
                        <div className={styles.pincodeRow}>
                            <FiMapPin />
                            <strong>{location.pincode}</strong>
                        </div>
                        <p>{location.address}</p>
                    </div>

                    <div className={styles.confirmWrapper}>
                        <button type="button" className={styles.confirmButton} onClick={handleConfirmLocation}>
                            Confirm Location
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.detailsModal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.detailsHeader}>
                    <button type="button" className={styles.backButton} onClick={handleBack}>
                        <FiArrowLeft />
                    </button>

                    <h2>{editingAddress ? "Edit Address" : "Add New Address"}</h2>

                    <button type="button" className={styles.detailsCloseButton} onClick={onClose}>
                        <FiX />
                    </button>
                </div>

                <div className={styles.detailsContent}>
                    <div className={styles.selectedLocation}>
                        <div className={styles.selectedLocationTop}>
                            <FiMapPin />
                            <strong>{location.pincode}</strong>
                        </div>
                        <p>{location.address}</p>
                    </div>

                    <div className={styles.inputFull}>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Flat / House No. / Floor / Building *" />
                    </div>

                    <div className={styles.inputFull}>
                        <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Area" />
                    </div>

                    <div className={styles.inputFull}>
                        <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Landmark (Optional)" />
                    </div>

                    <div className={styles.twoColumns}>
                        <div className={styles.pincodeInput}>
                            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                            <span>Incorrect?</span>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} />
                        </div>
                    </div>

                    <div className={styles.twoColumns}>
                        <div className={styles.selectBox}>
                            <select name="country" value={formData.country} onChange={handleChange}>
                                <option value="India">India</option>
                            </select>
                            <FiChevronDown />
                        </div>
                        <div className={styles.inputBox}>
                            <input type="text" name="state" value={formData.state} onChange={handleChange} />
                        </div>
                    </div>

                    <h3 className={styles.contactTitle}>Contact Details</h3>

                    <div className={styles.contactBox}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        <div className={styles.mobileGroup}>
                            <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                                <option value="+91">+91</option>
                            </select>
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                        </div>
                    </div>

                    <div className={styles.saveAsRow}>
                        <span>Save Address As</span>

                        <button type="button" className={formData.addressType === "Home" ? styles.typeActive : styles.typeButton} onClick={() => setFormData((prev) => ({ ...prev, addressType: "Home" }))}>
                            Home
                        </button>

                        <button type="button" className={formData.addressType === "Work" ? styles.typeActive : styles.typeButton} onClick={() => setFormData((prev) => ({ ...prev, addressType: "Work" }))}>
                            Work
                        </button>

                        <button type="button" className={formData.addressType === "Other" ? styles.typeActive : styles.typeButton} onClick={() => setFormData((prev) => ({ ...prev, addressType: "Other" }))}>
                            Other
                        </button>
                    </div>

                    <label className={styles.defaultAddress}>
                        <input type="checkbox" name="defaultAddress" checked={formData.defaultAddress} onChange={handleChange} />
                        <span>Save This As Default Address</span>
                    </label>
                </div>

                <div className={styles.detailsFooter}>
                    <button type="button" className={styles.cancelButton} onClick={onClose}>
                        Cancel
                    </button>
                    <button type="button" className={styles.saveButton} onClick={handleSaveAddress}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddAddressModal;