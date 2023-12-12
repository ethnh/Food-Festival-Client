import { FaBowlFood } from "react-icons/fa6";

const SectionTitleTwo = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="md:w-3/12 mx-auto text-center my-8 bg-black bg-opacity-50 rounded-xl">
                <div className="flex justify-center items-center mt-3"><FaBowlFood className="text-5xl text-orange-700 bg-orange-100 p-3 rounded-full"></FaBowlFood></div>
                <h3 className=" text-3xl font-bold text-orange-400 border-gray-300 border-b-2 pb-2 uppercase">{heading}</h3>
                <p className=" mb-3 mt-1 subheading-font text-white">_____ {subHeading} _____</p>
            </div>
        </div>
    );
};

export default SectionTitleTwo;