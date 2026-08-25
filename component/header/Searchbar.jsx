"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./searchbar.module.css";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className={`${styles.searchWrapper} ${isOpen ? styles.open : ""}`}>
      <div className={styles.searchBox} onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className={styles.icon}>
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
          <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <input type="text" placeholder="Search for products, brands and more" className={styles.input} />
      </div>
    </div>
  );
};

export default SearchBar;