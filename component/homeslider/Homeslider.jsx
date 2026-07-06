"use client";
import { slides } from "../../data/home_sliderdata";
const Homeslider = () => {
    return (
        <>
            <>
                {slides.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            backgroundImage: `url(${item.image.src})`,
                            height: "600px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h1>{item.title}</h1>
                    </div>
                ))}
            </>
        </>
    )
}

export default Homeslider;