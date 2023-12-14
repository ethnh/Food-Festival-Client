import { FaStar } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { IoBookmarksOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllItemsCard = ({ item }) => {
    const { _id, image, name, price, rating, offer, posiviteOne, posiviteTwo } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = () => {
        if (user && user.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                rating,
                offer
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please Log In first to Add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-2xl">
                <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
                <div className="  bg-black bg-opacity-70 p-1 mt-2 rounded-xl font-bold absolute left-3"><IoBookmarksOutline className="text-white  text-2xl" /></div>
                <div className="badge  bg-black bg-opacity-70 p-3 font-bold  text-white absolute right-0 mr-4 mt-4 "><span>{offer}% off</span></div>
                <div className="card-body flex-col h-[250px]">
                    <div className="flex justify-between">
                        <div className="badge bg-red-500 p-3 text-white font-bold gap-2">{price} $</div>
                        <div className="badge badge-warning badge-outline">{rating} <FaStar></FaStar></div>
                    </div>
                    <hr />
                    <h2 className="card-title">{name}</h2>
                    <p className="flex items-center gap-2"><HiOutlineCheckBadge className="text-xl text-red-400" />{posiviteOne}</p>
                    <p className="flex items-center gap-2"><HiOutlineCheckBadge className="text-xl text-red-400" />{posiviteTwo}</p>
                    <hr />
                    <button
                        onClick={handleAddToCart}
                        className="btn rounded-3xl badge badge-outline w-full hover:bg-gray-200 transition-all">Add To Cart <HiOutlineShoppingCart className="text-xl text-orange-500 "></HiOutlineShoppingCart></button>
                </div>
            </div>
        </div>
    );
};

export default AllItemsCard;