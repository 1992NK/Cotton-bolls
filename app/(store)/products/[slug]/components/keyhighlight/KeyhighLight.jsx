import styles from './keyhighlight.module.css'
import keyhighlightdata from './keyhighlightdata'

const KeyhighLight =()=>{
    return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Key Highlights</h2>

      <div className={styles.grid}>
        {keyhighlightdata.map((item, index) => (
          <div className={styles.card} key={index}>
            <p className={styles.label}>{item.label}</p>
            <h4 className={styles.value}>{item.value}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyhighLight;