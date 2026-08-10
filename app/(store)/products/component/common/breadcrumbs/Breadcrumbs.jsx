"use client";
import Link from "next/link";
import styles from "./breadcrumbs.module.css";
const Breadcrumbs = ({ items }) => {
    return (
       
            <nav className={styles.breadcrumb}>

                {items.map((item, index) => (
                    <span key={index} className={styles.item}>
                        {item.href ? (
                            <Link href={item.href}>{item.label}</Link>
                        ) : (
                            <span className={styles.active}>{item.label}</span>
                        )}

                        {index !== items.length - 1 && (
                            <span className={styles.separator}>/</span>
                        )}
                    </span>
                ))}


            </nav>
        
    );
}

export default Breadcrumbs;