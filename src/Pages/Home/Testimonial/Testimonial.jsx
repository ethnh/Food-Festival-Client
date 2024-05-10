
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
    Navigation,
    Pagination,
    Scrollbar,
    EffectCube,
    Autoplay,
} from "swiper/modules";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // rating,review,authorName,authorPosition,imageUrl
    return (
        <div className="pb-0 bg-gray-50">
            <p className="pt-16 text-xl text-center font-bold md:text-2xl lg:text-3xl">
                Satisfaction in Words
            </p>
            <Swiper
                // pagination={true}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
                className="mySwiper"
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                speed={2000}
            >
                {reviews.map((testimonial) => (
                    <SwiperSlide key={testimonial.imageUrl}>
                        <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;