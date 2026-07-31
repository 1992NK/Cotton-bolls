import styles from './headericon.module.css'

export default function HeaderIcons() {
  return (
    <div className={styles.headerIcons}>

      <div>
        👤
        <span>Profile</span>
      </div>

      <div>
        ❤
        <span>Wishlist</span>
      </div>

      <div>
        🛍
        <span>Bag</span>
      </div>

    </div>
  );
}