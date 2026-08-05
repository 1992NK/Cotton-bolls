"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./productgallery.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductGallery = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Active Image State (New Code)
  const [activeImage, setActiveImage] = useState(images[0] || "");

  useEffect(() => {
    if (images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  // Zoom State (Old Code)
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
    transform: "scale(1)",
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)",
    });
  };

  return (
    <div className={styles.gallery}>
      {/* Thumbnail Slider */}

      <Swiper
        direction="vertical"
        slidesPerView={5}
        spaceBetween={15}
        watchSlidesProgress
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        className={styles.thumbSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.thumb}>
              <Image
                src={image}
                alt=""
                fill
                className={styles.thumbImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Slider */}

      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={styles.mainSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.mainImage}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={image}
                alt=""
                fill
                className={styles.image}
                style={zoomStyle}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductGallery;