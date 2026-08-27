"use client";

import Logo from "../../../../component/header/Logo";
import styles from "./cartheader.module.css";

const CartHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`container`}>
          <Logo />
      
      </div>
    </header>
  );
};

export default CartHeader;