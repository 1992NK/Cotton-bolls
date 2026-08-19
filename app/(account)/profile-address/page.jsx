"use client";

import { useState } from "react";
import Header from "@/component/header/Header";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import styles from "./savedAddress.module.css";
import Footer from "@/component/footer/Footer";

const AddressPage = () => {
  const [address, setAddress] = useState(true);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (confirmDelete) {
      setAddress(false);
    }
  };

  return (
    <>
      <Header />

      <section className={styles.page}>
        <div className={styles.container}>

          {/* Existing Left Sidebar */}
          <ProfileSidebar />

          {/* Right Content */}
          <section className={styles.content}>

            {/* Add New Address */}
            <button className={styles.addAddress}>
              <span className={styles.plus}>+</span>
              <span>Add New Address</span>
            </button>

            {/* Address Card */}
            {address && (
              <div className={styles.addressCard}>

                <div className={styles.addressHeader}>
                  <div className={styles.addressTitle}>
                    <span className={styles.checked}>✓</span>

                    <strong>Neeraj Katiyar</strong>

                    <span className={styles.other}>
                      (Other)
                    </span>
                  </div>

                  <button className={styles.defaultButton}>
                    Set as Default
                  </button>
                </div>

                <div className={styles.addressDetails}>
                  <div>d2566, Kurla, Kurla,</div>
                  <div>Kurla, Kurla West, Friends Colony</div>
                  <div>Mumbai - 400070</div>
                  <div>Maharashtra,</div>

                  <div className={styles.mobile}>
                    Mobile: <strong>9625141776</strong>
                  </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.actions}>
                  <button className={styles.actionButton}>
                    <span>✎</span>
                    Edit
                  </button>

                  <div className={styles.actionDivider} />

                  <button
                    className={styles.actionButton}
                    onClick={handleDelete}
                  >
                    <span>♜</span>
                    Delete
                  </button>
                </div>

              </div>
            )}

          </section>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AddressPage;