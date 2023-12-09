import burger from '../../../assets/img/burger.jpg'
import pizza from '../../../assets/img/pizza.jpg'
import cake from '../../../assets/img/cake.jpg'
import fry from '../../../assets/img/fry.jpg'
import kabab from '../../../assets/img/kabab.jpg'
import sandwich from '../../../assets/img/sandwich.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const CategoryOverView = () => {
    return (
        <>
            <section>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='lg:w-[400px] w-[200px] h-[200px] mr-3 lg:h-[500px]'>
                            <img src={burger} className=' rounded-md' alt="" />
                            <h3 className='lg:text-4xl shadow-2xl uppercase text-center -mt-20 text-white bg-black bg-opacity-50'>Burger</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:w-[400px] w-[200px] h-[200px] lg:h-[500px]'>
                            <img src={pizza} className=' rounded-md' alt="" />
                            <h3 className='lg:text-4xl shadow-2xl uppercase text-center -mt-20 text-white bg-slate-600 z-10'>Pizza</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:w-[400px] w-[200px] h-[200px] lg:h-[500px]'>
                            <img src={sandwich} className=' rounded-md' alt="" />
                            <h3 className='lg:text-4xl shadow-2xl uppercase text-center -mt-20 text-white bg-slate-600 z-10'>Sandwich</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:w-[400px] w-[200px] h-[200px] lg:h-[500px]' >
                            <img src={cake} className=' rounded-md' alt="" />
                            <h3 className='lg:text-4xl shadow-2xl uppercase text-center -mt-20 text-white bg-slate-600 z-10'>Cake</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:w-[400px] w-[200px] h-[200px] lg:h-[500px]' >
                            <img src={fry} className=' rounded-md' alt="" />
                            <h3 className='lg:text-4xl shadow-2xl uppercase text-center -mt-20 text-white bg-slate-600 z-10'>Fry</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:w-[400px] w-[200px] h-[200px] lg:h-[500px]'>
                            <img src={kabab} className=' rounded-md' alt="" />
                            <h3 className='lg:text-4xl shadow-2xl uppercase text-center -mt-20 text-white bg-slate-600 z-10'>Kabab</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default CategoryOverView;