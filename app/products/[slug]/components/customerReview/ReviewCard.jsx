import { FaStar, FaRegThumbsUp } from "react-icons/fa";
import styles from './reviewCard.module.css'
const ReviewCard = ({ review }) => {

    return (

        <div className={styles.card}>

            <div className={styles.left}>

                <div className={styles.stars}>

                    {
                        [...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} />
                        ))
                    }

                </div>

                <h4>{review.title}</h4>

                <p className={styles.name}>
                    {review.name}
                </p>

                <p className={styles.date}>
                    {review.date}
                </p>

            </div>

            <div className={styles.right}>

                <div className={styles.helpful}>

                    ({review.helpful})

                    <FaRegThumbsUp />

                </div>

                <span>
                    People found this helpful
                </span>

            </div>

        </div>

    )

}

export default ReviewCard