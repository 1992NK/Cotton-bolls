"use client";

import Image from "next/image";
import style from "./promocard.module.css";

const PromoCard = ({ item }) => {
  return (
    <div
      className={`${style.card} ${
        item.size === "large" ? style.large : style.small }`}
      style={{ background: item.bgColor }}
    >
      <div className={style.content}>
        <span className={style.tag}>NEW SEASON</span>
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>

        <button className={style.btn}>
          Shop Now
          <span>→</span>
        </button>
      </div>

      <Image
        src={item.image}
        alt={item.title}
        fill
        className={style.image}
      />
    </div>
  );
};

export default PromoCard;