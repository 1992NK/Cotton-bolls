import styles from "./trustbadges.module.css";
import trustBadges from "./trustBadgesData";
const TrustBadges =()=>{
   return (
    <section className={styles.wrapper}>
      {trustBadges.map((item) => {
        const Icon = item.icon;

        return (
          <div className={styles.card} key={item.id}>
            <div className={styles.iconBox}>
              <Icon />
            </div>

            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        );
      })}
    </section>
  );
}

export default TrustBadges;