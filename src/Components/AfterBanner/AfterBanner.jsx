import { GiHamburger } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

const AfterBanner = () => {
    return (
        <div className="lg:flex justify-center gap-4 space-y-1">

            <div className="card flex-1 bg-base-100 shadow-xl lg:h-[270px]">
                <div className="flex justify-center items-center mt-3"><FaHandHoldingUsd className="text-8xl text-orange-500 bg-orange-100 p-3 rounded-full"></FaHandHoldingUsd></div>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold text-center text-gray-600">
                        Dixcount Voucher!
                    </h2>
                    <p className="text-gray-500">Unlock Savings: Your Exclusive Discount Voucher for Irresistible Deals Awaits You!</p>
                </div>
            </div>




            <div className="card flex-1 bg-base-100 shadow-xl lg:h-[270px]">
                <div className="flex justify-center items-center mt-3"><GiHamburger className="text-8xl text-orange-500 bg-orange-100 p-3 rounded-full"></GiHamburger></div>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold text-center text-gray-600">
                        Fresh And Healthy Food
                    </h2>
                    <p className="text-gray-500">Savor Freshness: Elevate Your Well-being with Wholesome, Nourishing Culinary Delights.</p>
                </div>
            </div>



            <div className="card flex-1 bg-base-100 shadow-xl  lg:h-[270px]">
                <div className="flex justify-center items-center mt-3"><IoFastFoodOutline className="text-8xl text-orange-500 bg-orange-100 p-3 rounded-full"></IoFastFoodOutline></div>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold text-center text-gray-600">
                        First Serve On Table
                    </h2>
                    <p className="text-gray-500">Swift Table Service: Enjoy Quick, Delicious Dining at Your Convenience.</p>
                </div>
            </div>
        </div>
    );
};

export default AfterBanner;