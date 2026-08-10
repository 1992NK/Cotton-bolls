"use client";

import Link from "next/link";
import Logo from "../../../../component/header/Logo";
import styles from "./cartheader.module.css";

const CartHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`container`}>
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default CartHeader;