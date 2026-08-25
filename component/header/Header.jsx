import styles from './header.module.css';
import HeaderIcons from './Headericon';
import Logo from './Logo';
import NavMenu from './Navmenu';
import SearchBar from './Searchbar';

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.leftSection}>
        <NavMenu />
      </div>

      <div className={styles.logoSection}>
        <Logo />
      </div>

      <div className={styles.rightSection}>
        <SearchBar />
        <HeaderIcons />
      </div>

    </header>
  );
};

export default Header;