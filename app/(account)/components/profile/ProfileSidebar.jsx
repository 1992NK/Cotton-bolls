"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './profileSidebar.module.css'

const menuItems = [
  {
    label: "Orders",
    href: "/orders",
    extra: "(Track your order here)",
  },
  {
    label: "Saved Address",
    href: "/saved-address",
  },
  {
    label: "Gift Vouchers",
    href: "/gift-vouchers",
  },
  {
    label: "CB Money",
    href: "/tss-money",
    extra: "(TSS Money Balance: ₹ 0.00)",
  },
  {
    label: "CB Points",
    href: "/tss-points",
    extra: "(Active TSS Points: 0.00)",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "My Membership",
    href: "/membership",
    membership: true,
  },
];

const ProfileSidebar =()=>{
     const pathname = usePathname();

  const handleLogout = () => {
    console.log("Logout clicked");

    // Yahan aap apna logout logic laga sakte hain
    // localStorage.removeItem("token");
    // router.push("/login");
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (confirmed) {
      console.log("Delete account");
    }
  };

  return (
    <div className={styles.sidebar}>
      {/* User Card */}
      <div className={styles.userCard}>
        <div className={styles.userTop}>
          <span className={styles.userName}>neeraj katiyar</span>

          <span className={styles.arrow}>›</span>
        </div>

        <p className={styles.email}>
          neerajkatiyar007@gmail.com
        </p>

        <span className={styles.member}>[Member]</span>
      </div>

      {/* Menu */}
      <div className={styles.menuWrapper}>
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${
                active ? styles.active : ""
              } ${item.membership ? styles.membership : ""}`}
            >
              <span>{item.label}</span>

              {item.extra && (
                <small>{item.extra}</small>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom Buttons */}
      <div className={styles.bottomActions}>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={handleDeleteAccount}
        >
          DELETE MY ACCOUNT
        </button>

        <button
          type="button"
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default ProfileSidebar