import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (

        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/vJhLQc0/barger-Image.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white ">Savor Culinary Delights at Our Restaurant</h1>
                                <p className="text-sm text-white my-2">Immerse in a culinary symphony, where our chefs orchestrate an ensemble of flavors, crafting an unforgettable dining experience for you.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/pw5Tw5k/ivan-torres-MQUqbmsz-GGM-unsplash-1-2-1.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white">Unforgettable Dining Adventures Await</h1>
                                <p className="text-sm text-white my-2">Explore the art of gastronomy in every bite, where passion for culinary excellence meets innovation, promising a feast for the senses.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/SQM9wVd/the-matter-of-food-loey-DId-EW-w-unsplash-1.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white">Indulge in Gastronomic Wonders</h1>
                                <p className="text-sm text-white my-2">Journey through a tapestry of taste, as our skilled chefs weave together diverse flavors, creating an unforgettable gastronomic adventure for you.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>


                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/s5WSp3Z/chad-montano-g-E28a-Tnlq-JA-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white ">Savor Culinary Delights at Our Restaurant</h1>
                                <p className="text-sm text-white my-2">Immerse in a culinary symphony, where our chefs orchestrate an ensemble of flavors, crafting an unforgettable dining experience for you.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/ZG9N68P/david-holifield-k-Pxsq-UGne-XQ-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white"> A Melody of Irresistible Tastes</h1>
                                <p className="text-sm text-white my-2">Savor the epitome of culinary craftsmanship, where each dish is a canvas of flavors, meticulously designed to delight and inspire.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/yQsZgb3/alexandru-bogdan-ghita-Ue-Ykq-Qh4-Po-I-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white"> Indulge in Gastronomic Wonders</h1>
                                <p className="text-sm text-white my-2">Elevate your dining expectations as we blend tradition with innovation, presenting a curated culinary experience that tantalizes and satisfies.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>


                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/wwnfpFh/paras-kapoor-SQ1v-UOx-SIZc-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white">Where Every Bite Tells a Story</h1>
                                <p className="text-sm text-white my-2">Indulge in a culinary voyage, where our menu unfolds a story of taste, precision, and passion, creating unforgettable dining memories.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/GRYxsKk/davide-cantelli-jpkfc5-d-DI-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white"> Unleashing the Art of Flavor</h1>
                                <p className="text-sm text-white my-2">Elevate your dining expectations as we blend tradition with innovation, presenting a curated culinary experience that tantalizes and satisfies.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;