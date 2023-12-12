import { IoFastFoodOutline } from "react-icons/io5";


const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div>
            <div className="md:w-3/12 mx-auto text-center my-8 ">
                <div className="flex justify-center items-center mt-3"><IoFastFoodOutline className="text-5xl text-orange-500 bg-orange-100 p-3 rounded-full"></IoFastFoodOutline></div>
                <h3 className=" text-3xl font-bold text-orange-400 border-gray-300 border-b-2 pb-2 uppercase">{heading}</h3>
                <p className=" mb-3 mt-1 subheading-font text-gray-500">_____ {subHeading} _____</p>
            </div>
        </div>
    );
};

export default SectionTitle;