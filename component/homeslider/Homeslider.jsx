"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slides } from "../../data/home_sliderdata";
const Homeslider = () => {
    return (
        <section>
            < Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }
                }
                autoplay={{
                    delay: 3000,
                }}
                loop={true}
            >
                {
                    slides.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className="slide"
                                style={{
                                    backgroundImage: `url(${item.image.src})`,
                                }}
                            >
                                <div className="content">
                                    <h1>{item.title}</h1>
                                    <h2>{item.price}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper >
        </section>


    )
}

export default Homeslider;