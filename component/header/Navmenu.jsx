import Image from "next/image";
import menuData from "./menudata";
import styles from "./navmenu.module.css";
import logo_icon from "@/assets/images/logo_icon.png";
const NavMenu = () => {
  return (
    <>
      <Image src={logo_icon} width={50} height={50} alt="logo" />

      <ul className={styles.navmenu}>
        {menuData.map((item) => (
          <li key={item.id}>
            {item.title}

            {item.badge && (
              <span className="badge">{item.badge}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;