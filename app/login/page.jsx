"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");

  // Phone number change
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setPhone(value);
  };

  // Proceed button
  const handleProceed = () => {
    if (!phone) {
      alert("Please enter your phone number");
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }


    // Baad mein OTP page ke liye:
    // router.push("/verify-otp");
  };

  // Google Login
  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  return (
    <>
      {/* Header */}
      <Header />

      <div className="container">
        {/* Login Background */}
        <section className={styles.loginSection}>

          {/* Login Card */}
          <div className={styles.loginCard}>

            {/* Heading */}
            <h1 className={styles.loginTitle}>
              Login with The Souled Store
            </h1>


            {/* Login / Register Tabs */}
            <div className={styles.tabs}>

              {/* LOGIN */}
              <button
                type="button"
                className={`${styles.tab} ${styles.activeTab}`}
              >
                LOGIN
              </button>


              {/* REGISTER */}
              <button
                type="button"
                className={styles.tab}
                onClick={() => router.push("/register")}
              >
                REGISTER
              </button>

            </div>


            {/* Login Form Box */}
            <div className={styles.loginFormBox}>

              {/* Google Login */}
              <button
                type="button"
                className={styles.googleButton}
                onClick={handleGoogleLogin}
              >

                <span className={styles.googleIcon}>
                  <FcGoogle />
                </span>

                <span className={styles.googleText}>
                  Google
                </span>

              </button>


              {/* OR */}
              <div className={styles.orText}>
                - OR -
              </div>


              {/* Phone Number */}
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={10}
                placeholder="Enter Phone Number"
                className={styles.phoneInput}
              />


              {/* Proceed */}
              <button
                type="button"
                className={styles.proceedButton}
                onClick={handleProceed}
              >
                PROCEED
              </button>


              {/* New User */}
              <div className={styles.newUser}>

                <span>
                  New User ?
                </span>

                <button
                  type="button"
                  className={styles.createAccountButton}
                  onClick={() => router.push("/register")}
                >
                  Create Account
                </button>

              </div>

            </div>

          </div>

        </section>

      </div>


      {/* Footer */}
      <Footer />
    </>
  );
}