import { FaQuoteRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaComments } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle heading={"Testimonial"} subHeading={'Whats Our Regular Customar say?'}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="lg:my-16 lg:mx-24 flex flex-col items-center lg:max-w-2xl p-3 shadow-xl rounded-2xl bg-slate-50">

                            <h3 className="lg:text-2xl text-orange-400 flex items-center gap-2 my-3">{review.name}
                                <p><FaQuoteRight className="text-5xl mx-auto text-gray-200"></FaQuoteRight></p></h3>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div className="my-8">
                                <p>{review.details} </p>
                            </div>
                            <FaComments className="text-5xl text-gray-200"></FaComments>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonial;