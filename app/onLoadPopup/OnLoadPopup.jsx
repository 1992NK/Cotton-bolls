"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./onLoadPopup.module.css";

const OnLoadPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <Image
          src="/images/onload-popup.png"
          alt="CB Coin Offer"
          width={800}
          height={640}
          className={styles.popupImage}
        />
      </div>
    </div>
  );
};

export default OnLoadPopup;