import { Link } from 'react-router-dom';

const OurFoodQuality = () => {
    return (
        <div>
            <section
                className="overflow-hidden lg:pt-14 md:pt-10 pt-6  sm:grid sm:grid-cols-2 sm:items-center"
            >
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div
                        className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                    >
                        <h3 className='text-orange-600 text-2xl font-bold'>About Our Food Quality . . . . </h3>
                        <h1 className="text-3xl font-bold">Elevate Your Tastebuds with Our Unparalleled Food Quality</h1>
                        <div className="py-3">Welcome to Food Fastival! Indulge in a culinary journey where exquisite flavors and impeccable quality converge.
                            <p className='my-2'>Our restaurant promises a delectable experience with meticulously crafted dishes using only the finest ingredients. Savor the excellence in every bite, as we redefine your dining expectations with our commitment to exceptional food quality</p>
                        </div>
                        <Link to='/menu'><button className="px-4 py-2 bg-[#FF4860] rounded-2xl btn-outline text-white font-bold">Order Now From Menu</button></Link>
                    </div>
                </div>

                <img
                    alt="Violin"
                    src="https://i.ibb.co/PQK78f1/ivan-torres-MQUqbmsz-GGM-unsplash-1.jpg"
                    className="h-full rounded-md md:rounded-l-full  w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section >
            <div className='mt-28 mb-28'>

            </div>

        </div>
    );
};

export default OurFoodQuality;
