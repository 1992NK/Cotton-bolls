"use client";

import styles from "./proceedbutton.module.css";
import Link from "next/link";

const ProceedButton = () => {
  return (
    <Link href="/login" className={styles.proceedButton}>
      Proceed
    </Link>
  );
};

export default ProceedButton;