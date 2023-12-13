import { IoBookmarksOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const PopularMenuCard = ({ item }) => {
    const { image, name, price, offer, rating, withFood, quantity } = item;
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-2xl">
                <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
                <div className="  bg-black bg-opacity-70 p-1 mt-2 rounded-xl font-bold absolute left-3"><IoBookmarksOutline className="text-white  text-2xl" /></div>
                <div className="badge  bg-black bg-opacity-70 p-3 font-bold  text-white absolute right-0 mr-4 mt-4 ">{offer}<span>% off</span></div>
                <div className="card-body flex-col">
                    <div className="flex justify-between">
                        <div className="badge bg-red-500 p-3 text-white font-bold gap-2">{price} $</div>
                        <div className="badge badge-warning badge-outline">{rating} <FaStar></FaStar></div>
                    </div>
                    <hr />
                    <h2 className="card-title">{name}</h2>
                    <p className="flex items-center gap-2"><HiOutlineCheckBadge className="text-xl text-red-400" /> {quantity}</p>
                    <p className="flex items-center gap-2"><HiOutlineCheckBadge className="text-xl text-red-400" /> {withFood}</p>
                    <hr />
                    <h1 className="badge badge-outline">Contact to Order OR Ask For that</h1>
                </div>
            </div>
        </div>
    );
};

export default PopularMenuCard;