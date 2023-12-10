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
        // <div>
        //     <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Gpj7srp/sk-u-VPV-n-V17-Tw-unsplash.jpg)' }}>
        //         <div className="hero-overlay bg-opacity-80"></div>
        //         <div className="hero-content text-center text-neutral-content">
        //             <div className="flex gap-5 items-center justify-between">


        //                 <div className="flex-1 flex justify-start text-left">
        //                     <div>
        //                         <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //                         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //                         <button className="btn btn-primary">Get Started</button>
        //                     </div>
        //                 </div>


        //                 <div className="flex-1">
        //                     <div className="carousel w-full h-[600px]">
        //                         <div id="slide1" className="carousel-item relative w-full">

        //                             <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bottom-0 ">
        //                                 <img src={burger} alt="" />
        //                             </div>
        //                             <div className="absolute flex justify-end transform -translate-y-full left-5 right-5 bottom-0">
        //                                 <a href="#slide4" className="btn btn-circle mr-5">❮</a>
        //                                 <a href="#slide2" className="btn btn-circle">❯</a>
        //                             </div>
        //                         </div>
        //                         <div id="slide2" className="carousel-item relative w-full">

        //                             <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bottom-0 ">
        //                                 <img src={pizza} alt="" />
        //                             </div>
        //                             <div className="absolute flex justify-end transform -translate-y-full left-5 right-5 bottom-0">
        //                                 <a href="#slide1" className="btn btn-circle mr-5">❮</a>
        //                                 <a href="#slide3" className="btn btn-circle">❯</a>
        //                             </div>
        //                         </div>
        //                         <div id="slide3" className="carousel-item relative w-full">

        //                             <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bottom-0 ">
        //                                 <img src={sandwich} alt="" />
        //                             </div>
        //                             <div className="absolute flex justify-end transform -translate-y-full left-5 right-5 bottom-0">
        //                                 <a href="#slide2" className="btn btn-circle mr-5">❮</a>
        //                                 <a href="#slide4" className="btn btn-circle">❯</a>
        //                             </div>
        //                         </div>
        //                         <div id="slide4" className="carousel-item relative w-full">

        //                             <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bottom-0 ">
        //                                 <img src={cake} alt="" />
        //                             </div>
        //                             <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        //                                 <a href="#slide3" className="btn btn-circle mr-5">❮</a>
        //                                 <a href="#slide5" className="btn btn-circle">❯</a>
        //                             </div>
        //                         </div>
        //                         <div id="slide5" className="carousel-item relative w-full">

        //                             <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bottom-0 ">
        //                                 <img src={fry} alt="" />
        //                             </div>
        //                             <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        //                                 <a href="#slide4" className="btn btn-circle mr-5">❮</a>
        //                                 <a href="#slide1" className="btn btn-circle">❯</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

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
                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/TmcfCZf/ilya-mashkov-mk-Va2h-LJgn-I-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white ">Savor Culinary Delights at Our Restaurant</h1>
                                <p className="text-sm text-white my-2">Immerse in a culinary symphony, where our chefs orchestrate an ensemble of flavors, crafting an unforgettable dining experience for you.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/PQK78f1/ivan-torres-MQUqbmsz-GGM-unsplash-1.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white">Unforgettable Dining Adventures Await</h1>
                                <p className="text-sm text-white my-2">Explore the art of gastronomy in every bite, where passion for culinary excellence meets innovation, promising a feast for the senses.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/LR3nSKQ/the-matter-of-food-loey-DId-EW-w-unsplash-1.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white">Indulge in Gastronomic Wonders</h1>
                                <p className="text-sm text-white my-2">Journey through a tapestry of taste, as our skilled chefs weave together diverse flavors, creating an unforgettable gastronomic adventure for you.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>


                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/M502M1t/chad-montano-g-E28a-Tnlq-JA-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white ">Savor Culinary Delights at Our Restaurant</h1>
                                <p className="text-sm text-white my-2">Immerse in a culinary symphony, where our chefs orchestrate an ensemble of flavors, crafting an unforgettable dining experience for you.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/mRW9R5j/david-holifield-k-Pxsq-UGne-XQ-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white"> A Melody of Irresistible Tastes</h1>
                                <p className="text-sm text-white my-2">Savor the epitome of culinary craftsmanship, where each dish is a canvas of flavors, meticulously designed to delight and inspire.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/bzRzsPG/alexandru-bogdan-ghita-Ue-Ykq-Qh4-Po-I-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white"> Indulge in Gastronomic Wonders</h1>
                                <p className="text-sm text-white my-2">Elevate your dining expectations as we blend tradition with innovation, presenting a curated culinary experience that tantalizes and satisfies.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>


                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/prykSGr/paras-kapoor-SQ1v-UOx-SIZc-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl bg-black bg-opacity-60 p-4">
                                <h1 className="text-3xl font-bold text-white">Where Every Bite Tells a Story</h1>
                                <p className="text-sm text-white my-2">Indulge in a culinary voyage, where our menu unfolds a story of taste, precision, and passion, creating unforgettable dining memories.</p>
                                <Link to='/register'><button className="bg-orange-400 px-5 py-2 rounded-3xl text-white font-semibold my-3">Order Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden bg-no-repeat text-center bg-[url('https://i.ibb.co/g9R1BJ0/davide-cantelli-jpkfc5-d-DI-unsplash.jpg')] h-[400px] lg:h-screen bg-cover">
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