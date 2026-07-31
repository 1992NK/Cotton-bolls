import styles from "./newsletter.module.css"
const Newsletter = () => {
    return (
        <div className={styles.row}>
            <div className={styles.leftcontent}>
                <span className={styles.offer}>$20 discount for your first order</span>

                <h2>Get our email for info on new items</h2>

                <p>
                    Join our email subscription now to get updates
                    on promotions and coupons.
                </p>

                <form className={styles.subscribebox}>
                    <div className={styles.inputbox}>
                        <i className="fa-regular fa-envelope"></i>
                        <input type="email" placeholder="Your email address" />
                    </div>

                    <button type="submit">Subscribe</button>
                </form>

            </div>

            <div className={styles.rightcontent}>
               {/*  <img src="https://i.imgur.com/2jB4L5M.png" alt="Coupon" /> */}
            </div>
        </div>
    )
}

export default Newsletter