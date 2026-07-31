import styles from "./searchbar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBox}>

      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  className={styles.icon}
>
  <circle
    cx="11"
    cy="11"
    r="7"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  />
  <line
    x1="16.65"
    y1="16.65"
    x2="21"
    y2="21"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  />
</svg>

      <input
        type="text"
        placeholder="Search for products, brands and more"
        className={styles.input}
      />

    </div>
  );
}