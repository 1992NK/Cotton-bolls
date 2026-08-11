"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import Footer from "@/component/footer/Footer";

import styles from "./register.module.css";
import Header from "@/component/header/Header";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Name
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Phone
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  // Password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Confirm Password
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Google Register
  const handleGoogleRegister = () => {
    console.log("Google Register");
  };

  // Register
  const handleRegister = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    if (!phone) {
      alert("Please enter your phone number");
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }

    if (!password) {
      alert("Please enter your password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (!confirmPassword) {
      alert("Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    // Account create hone ke baad login page
    alert("Account created successfully");

    router.push("/login");
  };

  return (
    <>

    <Header />

      <main className={styles.registerPage}>
        <section className={styles.registerSection}>
          <div className={styles.registerCard}>

            {/* Heading */}
            <h1 className={styles.registerTitle}>
              Register with The Souled Store
            </h1>

            {/* Login / Register Tabs */}
            <div className={styles.tabs}>

              {/* Login */}
              <button
                type="button"
                className={styles.tab}
                onClick={() => router.push("/login")}
              >
                LOGIN
              </button>

              {/* Register */}
              <button
                type="button"
                className={`${styles.tab} ${styles.activeTab}`}
              >
                REGISTER
              </button>

            </div>

            {/* Register Form */}
            <div className={styles.registerFormBox}>

              {/* Google */}
              <button
                type="button"
                className={styles.googleButton}
                onClick={handleGoogleRegister}
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

              {/* Name */}
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter Full Name"
                className={styles.formInput}
              />

              {/* Email */}
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Email Address"
                className={styles.formInput}
              />

              {/* Phone */}
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={10}
                placeholder="Enter Phone Number"
                className={styles.formInput}
              />

              {/* Password */}
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                className={styles.formInput}
              />

              {/* Confirm Password */}
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                className={styles.formInput}
              />

              {/* Register Button */}
              <button
                type="button"
                className={styles.registerButton}
                onClick={handleRegister}
              >
                REGISTER
              </button>

              {/* Already User */}
              <div className={styles.existingUser}>
                <span>
                  Already have an account?
                </span>

                <button
                  type="button"
                  className={styles.loginButton}
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}