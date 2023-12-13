import { Parallax } from "react-parallax";

const CoverImage = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[600px] rounded-xl">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black bg-opacity-60 rounded-xl p-3">
                        <h1 className=" text-4xl font-bold">{title}</h1>
                        <p className="uppercase">{description}</p>
                    </div>
                </div>
            </div>

        </Parallax>
    );
};

export default CoverImage;