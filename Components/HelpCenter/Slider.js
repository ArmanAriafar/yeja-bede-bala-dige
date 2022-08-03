// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Slider(props) {
    return (
        <Swiper
            slidesPerView={2}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            loop={true}
        >
            {props.Data.map((i, index) => {
                return (
                    <SwiperSlide key={index}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={i}
                            alt={index}
                            className="
                            max-h-72 w-full max-w-[22.5rem] rounded-[1.25rem] 
                            shadow-[0px_4px_20px_rgba(120,123,154,0.15)]"
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
