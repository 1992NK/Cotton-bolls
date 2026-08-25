"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import styles from "./homeslider.module.css";
import { slides } from "../../data/home_sliderdata";

const Homeslider = () => {
    return (
        <section className={styles.homeSlider}>
            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Autoplay,
                    EffectCreative
                ]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                speed={1500}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                effect="creative"
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-20%", 0, -1],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
            >
                {
                    slides.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className={styles.slide}
                                style={{
                                    backgroundImage: `url(${item.image.src})`,
                                }}
                            >

                                <div className={styles.overlay}></div>

                                <div className={styles.container}>
                                    <div className={styles.content}>
                                        <h1>{item.title}</h1>
                                        <h2>{item.price}</h2>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    );
};

export default Homeslider;