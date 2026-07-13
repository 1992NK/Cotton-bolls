"use client";

import Image from "next/image";
import style from "./promotionBanner.module.css";

const PromoCard = ({ item }) => {
  return (
    <div
      className={`${style.card} ${
        item.size === "large" ? style.large : style.small
      }`}
    >
      <div className={style.content}>
        <span className={style.tag}>NEW SEASON</span>

        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>

        <button>Shop Now →</button>
      </div>

      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width:768px)100vw,50vw"
        className={style.image}
      />
    </div>
  );
};

export default PromoCard;