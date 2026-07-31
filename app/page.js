import Image from "next/image";
import styles from "./page.module.css";
import Homeslider from "@/component/homeslider/Homeslider";
import PromotionBanner from "@/component/promotionBanner/PromotionBanner";
import FeaturedProducts from "@/component/featuredProducts/FeaturedProduct";
import DealWeek from "@/component/dealoftheweek/DealWeek";
import Newsletter from "@/component/Newsletter";

export default function Home() {
  return (
    <div className={styles.page}>
      <Homeslider />

      <section>
        <div className={styles.container}>
          <FeaturedProducts />
        </div>
      </section>

      <section className={styles.new_season}>
        <div className={styles.container}>
          <PromotionBanner />
        </div>
      </section>

     <section className={styles.deal_week}>
        <div className={styles.container}>
          <DealWeek />
        </div>
      </section>

       <section className={styles.newsletter}>
        <div className={styles.container}>
          <Newsletter />
        </div>
      </section>


    </div>
  );
}
