import styles from './customerReviews.module.css'
import ReviewFilter from "./ReviewFilter";
import ReviewCard from "./ReviewCard";
const CustomerReviews = () => {

    const reviews = [

        {
            id: 1,
            rating: 5,
            title: "Really amazing and good quality",
            name: "Churchit Parida",
            date: "4 August 2026",
            helpful: 0
        },

        {
            id: 2,
            rating: 5,
            title: "Superb in every aspect",
            name: "Abhishek babu",
            date: "9 April 2026",
            helpful: 0
        }

    ];

    return (

        <section className={styles.wrapper}>

            <h2>
                Hear what our customers say ({reviews.length})
            </h2>

            <ReviewFilter />

            <div>

                {
                    reviews.map(review => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                        />
                    ))
                }

            </div>

            <button className={styles.viewAll}>
                View all Reviews
            </button>

        </section>

    )

}

export default CustomerReviews