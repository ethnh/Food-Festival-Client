
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
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // rating,review,authorName,authorPosition,imageUrl
    return (
        <div className="pb-0">
            <SectionTitle heading={'Satisfaction in Words'}></SectionTitle>
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