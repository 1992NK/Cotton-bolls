import styles from './footer.module.css'
import PaymentIcon from "./PaymentIcon"
import footerData from './footerData'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.top}>
                    <div className={styles.about}>
                        <h2>{footerData.about.logo}</h2>

                        <p>{footerData.about.description}</p>

                        <span>
                            {footerData.about.phone}
                        </span>

                        <span>
                            {footerData.about.email}
                        </span>
                    </div>

                    <div>
                        <h4>Information</h4>
                        <ul>
                            {footerData.information.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Account</h4>

                        <ul>
                            {footerData.account.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Shop</h4>

                        <ul>
                            {footerData.shop.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Categories</h4>

                        <ul>
                            {footerData.categories.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                <hr />

                <div className={styles.bottom}>

                    <div className={styles.copy}>
                        Copyright © 2026 Cotton Bolls.
                        All rights reserved.
                    </div>

                    <PaymentIcon />

                    <div className={styles.links}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Returns Policy</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;