import menuData from "./menudata";
import styles from './navmenu.module.css'
const NavMenu=()=> {
  return (
    <ul className={styles.navmenu}>
      {menuData.map((item) => (
        <li key={item.id}>
          {item.title}

          {item.badge && (
            <span className="badge">
              {item.badge}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;