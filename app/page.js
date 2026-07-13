import Image from "next/image";
import styles from "./page.module.css";
import Homeslider from "@/component/homeslider/Homeslider";
import PromotionBanner from "@/component/promotionBanner/PromotionBanner";
import FeaturedProducts from "@/component/featuredProducts/FeaturedProduct";
import DealWeek from "@/component/dealoftheweek/DealWeek";

export default function Home() {
  return (
    <div className={styles.page}>
      <Homeslider />

      <section>
        <div className={styles.container}>
          <FeaturedProducts />
        </div>
      </section>

      <section>
        <div className={styles.container}>
          <PromotionBanner />
        </div>
      </section>

     <section>
        <div className={styles.container}>
          <DealWeek />
        </div>
      </section>


    </div>
  );
}
