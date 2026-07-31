import styles from './header.module.css'
import HeaderIcons from './Headericon';
import Logo from './Logo';
import NavMenu from './Navmenu';
import SearchBar from './Searchbar';

const Header =()=>{
     return (
    <header className={styles.header}>

      <Logo />

      <NavMenu />

      <SearchBar />

      <HeaderIcons />

    </header>
  );
}

export default Header;