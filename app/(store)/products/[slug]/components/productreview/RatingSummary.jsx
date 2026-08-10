import { FaStar } from "react-icons/fa";
import styles from "./ratingSummary.module.css"
const RatingSummary = ({
    rating,
    totalRatings
}) => {
    return (

        <div className={styles.summary}>

            <h1>{rating}</h1>

            <p>{totalRatings} ratings</p>

            <div className={styles.stars}>

                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                ))}

            </div>

            <button>RATE</button>

        </div>

    )

}

export default RatingSummary