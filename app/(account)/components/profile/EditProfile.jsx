"use client";

import { useState } from "react";
import styles from "./editProfile.module.css";

const EditProfile = () => {
  // =========================================
  // PROFILE DATA
  // =========================================

  const [formData, setFormData] = useState({
    email: "neerajkatiyar007@gmail.com",
    password: "123456",
    firstName: "neeraj",
    lastName: "katiyar",
    dob: "1992-07-01",
    mobile: "9625141776",
    gender: "male",
  });

  // =========================================
  // PASSWORD SHOW / HIDE
  // =========================================

  const [showPassword, setShowPassword] = useState(false);

  // =========================================
  // CHANGE PASSWORD POPUP
  // =========================================

  const [showChangePassword, setShowChangePassword] =
    useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // =========================================
  // DOB INFORMATION POPUP
  // =========================================

  const [showDobInfo, setShowDobInfo] = useState(false);

  // =========================================
  // PROFILE INPUT CHANGE
  // =========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =========================================
  // GENDER CHANGE
  // =========================================

  const handleGenderChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      gender: event.target.value,
    }));
  };

  // =========================================
  // SAVE PROFILE
  // =========================================

  const handleSave = (event) => {
    event.preventDefault();

    console.log("Profile Data:", formData);

    alert("Profile saved successfully!");
  };

  // =========================================
  // OPEN CHANGE PASSWORD
  // =========================================

  const handleChangePassword = () => {
    setShowChangePassword(true);
  };

  // =========================================
  // CLOSE CHANGE PASSWORD
  // =========================================

  const closeChangePassword = () => {
    setShowChangePassword(false);

    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  // =========================================
  // PASSWORD INPUT CHANGE
  // =========================================

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswordData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =========================================
  // SUBMIT NEW PASSWORD
  // =========================================

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    const {
      oldPassword,
      newPassword,
      confirmPassword,
    } = passwordData;

    if (!oldPassword) {
      alert("Please enter old password.");
      return;
    }

    if (!newPassword) {
      alert("Please choose a new password.");
      return;
    }

    if (!confirmPassword) {
      alert("Please confirm your password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert(
        "New password and confirm password do not match."
      );
      return;
    }

    console.log("Password Data:", passwordData);

    alert("Password changed successfully.");

    closeChangePassword();
  };

  // =========================================
  // CLOSE DOB POPUP
  // =========================================

  const closeDobInfo = () => {
    setShowDobInfo(false);
  };

  return (
    <>
      {/* =====================================================
          PROFILE CONTENT
      ===================================================== */}

      <div className={styles.profileContent}>

        {/* =========================================
            PAGE HEADING
        ========================================= */}

        <div className={styles.pageHeading}>
          EDIT PROFILE
        </div>

        <form onSubmit={handleSave}>

          {/* =========================================
              LOGIN INFORMATION
          ========================================= */}

          <section className={styles.loginSection}>

            {/* EMAIL */}

            <div className={styles.fieldGroup}>
              <label htmlFor="email">
                Email Id
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* PASSWORD */}

            <div className={styles.passwordGroup}>

              <div className={styles.passwordHeader}>

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  onClick={handleChangePassword}
                  className={styles.changePassword}
                >
                  Change Password
                </button>

              </div>

              <div className={styles.passwordInputWrapper}>

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label="Show password"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

          </section>

          {/* =========================================
              GENERAL INFORMATION
          ========================================= */}

          <section className={styles.generalSection}>

            {/* SECTION TITLE */}

            <div className={styles.sectionTitle}>
              General Information
            </div>

            <div className={styles.formGrid}>

              {/* =====================================
                  LEFT COLUMN
              ===================================== */}

              <div className={styles.leftColumn}>

                {/* FIRST NAME */}

                <div className={styles.formField}>

                  <label htmlFor="firstName">
                    First Name *
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* LAST NAME */}

                <div className={styles.formField}>

                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                  />

                </div>

                {/* GENDER */}

                <div className={styles.genderField}>

                  <label>
                    Gender
                  </label>

                  <div className={styles.genderOptions}>

                    {/* MALE */}

                    <label
                      className={
                        styles.radioLabel
                      }
                    >

                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={
                          formData.gender ===
                          "male"
                        }
                        onChange={
                          handleGenderChange
                        }
                      />

                      <span>
                        Male
                      </span>

                    </label>

                    {/* FEMALE */}

                    <label
                      className={
                        styles.radioLabel
                      }
                    >

                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={
                          formData.gender ===
                          "female"
                        }
                        onChange={
                          handleGenderChange
                        }
                      />

                      <span>
                        Female
                      </span>

                    </label>

                    {/* OTHER */}

                    <label
                      className={
                        styles.radioLabel
                      }
                    >

                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={
                          formData.gender ===
                          "other"
                        }
                        onChange={
                          handleGenderChange
                        }
                      />

                      <span>
                        Other
                      </span>

                    </label>

                  </div>

                </div>

              </div>

              {/* =====================================
                  RIGHT COLUMN
              ===================================== */}

              <div className={styles.rightColumn}>

                {/* DATE OF BIRTH */}

                <div className={styles.formField}>

                  <label htmlFor="dob">

                    Date of Birth

                    <button
                      type="button"
                      className={
                        styles.infoIcon
                      }
                      onClick={() =>
                        setShowDobInfo(true)
                      }
                      aria-label="Date of birth information"
                    >
                      i
                    </button>

                  </label>

                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                  />

                </div>

                {/* MOBILE NUMBER */}

                <div className={styles.formField}>

                  <label htmlFor="mobile">
                    Mobile Number *
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    maxLength="10"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

            </div>

          </section>

          {/* =========================================
              SAVE BUTTON
          ========================================= */}

          <div className={styles.saveSection}>

            <button
              type="submit"
              className={styles.saveButton}
            >
              SAVE
            </button>

          </div>

        </form>

      </div>

      {/* =====================================================
          CHANGE PASSWORD POPUP
      ===================================================== */}

      {showChangePassword && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closeChangePassword();
            }

          }}
        >

          <div className={styles.passwordModal}>

            {/* CLOSE */}

            <button
              type="button"
              className={styles.modalClose}
              onClick={closeChangePassword}
              aria-label="Close"
            >
              ×
            </button>

            <h4 className={styles.titlepop}>Change Password</h4>

            <form
              onSubmit={handlePasswordSubmit}
              className={styles.passwordForm}
            >

              {/* OLD PASSWORD */}

              <input
                type="password"
                name="oldPassword"
                placeholder="Old Password *"
                value={
                  passwordData.oldPassword
                }
                onChange={
                  handlePasswordChange
                }
                className={
                  styles.passwordModalInput
                }
              />

              {/* NEW PASSWORD */}

              <input
                type="password"
                name="newPassword"
                placeholder="Choose New Password *"
                value={
                  passwordData.newPassword
                }
                onChange={
                  handlePasswordChange
                }
                className={
                  styles.passwordModalInput
                }
              />

              {/* CONFIRM PASSWORD */}

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password *"
                value={
                  passwordData.confirmPassword
                }
                onChange={
                  handlePasswordChange
                }
                className={
                  styles.passwordModalInput
                }
              />

              

              {/* ACTION BUTTONS */}

              <div
                className={
                  styles.modalActions
                }
              >

                <button
                  type="button"
                  className={
                    styles.cancelButton
                  }
                  onClick={
                    closeChangePassword
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={
                    styles.submitButton
                  }
                >
                  Submit
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

      {/* =====================================================
          DATE OF BIRTH INFORMATION POPUP
      ===================================================== */}

      {showDobInfo && (
        <div
          className={styles.dobOverlay}
          onMouseDown={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closeDobInfo();
            }

          }}
        >

          <div className={styles.dobModal}>

            {/* CONTENT */}

            <div className={styles.dobContent}>

              <h3>
                Date of birth can be changed
                only once a year
              </h3>

              <p>
                To keep birthday rewards fair,
                your date of birth can be updated
                only once every 12 months. Once
                you save a change, you won't be
                able to update it again for a year.
              </p>

            </div>

            {/* FOOTER */}

            <div className={styles.dobFooter}>

              <button
                type="button"
                className={
                  styles.gotItButton
                }
                onClick={closeDobInfo}
              >
                Got it
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default EditProfile;