

const SectionTitle = ({ titleImg, subHeading, heading }) => {
    return (
        <div>
            <div className="md:w-3/12 mx-auto text-center my-8 ">
                <img className='w-10 mx-auto' src={titleImg} alt="" />
                <h3 className=" text-3xl font-bold text-gray-700 border-gray-400 border-b-2 pb-2">{heading}</h3>
                <p className=" mb-3 mt-1 subheading-font text-orange-400">_____ {subHeading} _____</p>
            </div>
        </div>
    );
};

export default SectionTitle;