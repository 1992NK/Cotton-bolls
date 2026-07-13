import PromoCard from "./PromoCard";
import promoData from "../../data/promoData";
import style from "./promotionBanner.module.css";
const PromotionBanner = () => {
    const largeCard = promoData.find(item => item.size === "large");
    const smallCards = promoData.filter(item => item.size === "small");
    return (
        <>
            <section className={style.promoSection}>
                <div className={style.left}>
                    <PromoCard item={largeCard} />
                </div>

                <div className={style.right}>
                    {smallCards.map((item) => (
                        <PromoCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </>
    )    
}

export default PromotionBanner;