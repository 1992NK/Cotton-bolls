import ReviewTabs from "./ReviewTabs";
import RatingSummary from "./RatingSummary";
import RatingBars from "./RatingBars";

import styles from "./productReviews.module.css"
const ProductReviews =()=>{
    const ratingData=[
{star:5,count:7},
{star:4,count:0},
{star:3,count:0},
{star:2,count:0},
{star:1,count:0},
];
   return(

<section className={styles.wrapper}>

<ReviewTabs/>

<div className={styles.info}>

<p className={styles.recommend}>
👍 <span>100%</span> of verified buyers recommend this product
</p>

<div className={styles.content}>

<RatingSummary
rating={5}
totalRatings={7}
/>

<RatingBars
data={ratingData}
/>

</div>

</div>

</section>

)
}

export default ProductReviews