import { FaStar } from "react-icons/fa6";


const MenuOverviewCard = ({ item }) => {
    const { image, name, price, recipe, rating } = item;
    return (
        <div className="flex-col space-y-3 shadow-xl rounded-md p-3 hover:translate-y-5 transition-all">
            <img style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }} className="w-[150px] h-28" src={image} alt="" />
            <div className="lg:h-20">
                <h3 className="uppercase text-lg font-bold">{name}</h3>
                <p>{recipe}</p>
            </div>
            <div className="flex justify-between">
                <p className="p-3 badge badge-info badge-outline font-bold">${price}</p>
                <p className="p-3 badge badge-warning badge-outline font-bold flex items-center gap-2">{rating} <FaStar></FaStar></p>
            </div>

        </div>
    );
};

export default MenuOverviewCard;