import img1 from '../../../../assets/img/sideImg.jpg'
import img2 from '../../../../assets/img/smImg1.jpg'

const OurFoodQuality = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img2} className='w-1/2 absolute right-5 top-1/2 border-8  border-white rounded-lg shadow-2xl' alt="" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-orange-600 text-2xl font-bold'>About Our Food Quality . . . . </h3>
                    <h1 className="text-3xl font-bold">Elevate Your Tastebuds with Our Unparalleled Food Quality</h1>
                    <div className="py-3">Welcome to Food Fastival! Indulge in a culinary journey where exquisite flavors and impeccable quality converge.
                        <p className='my-2'>Our restaurant promises a delectable experience with meticulously crafted dishes using only the finest ingredients. Savor the excellence in every bite, as we redefine your dining expectations with our commitment to exceptional food quality</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFoodQuality;
