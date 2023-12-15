
import { FaEdit, FaHome, FaShoppingCart, FaUsers, } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import logo from '../assets/logo/logo.png'
import { FaBurger } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";

const Dashboard = () => {
    const [cart] = useCarts();
    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-white' to='/menu'>Our Menu</Link></li>
        <li><Link className='font-semibold text-white' to='/allItems/homeMenuOverview'>All Items</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Contact Us</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Dashboard</Link></li>
        <li><Link className='font-semibold text-white' to='/login'>Login</Link></li>
    </>


    const isAdmin = false;
    return (
        <div className="p-5">


            <div className="navbar bg-black bg-opacity-50 mt-5 lg:w-1/2 mx-auto rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} className="w-[70px]" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>




            <div className="lg:flex md:flex mt-4">
                <div className="lg:w-64 md:w-64 min-h-screen bg-red-400 rounded-md">
                    <div className="menu space-y-3">
                        {
                            isAdmin ? <>
                                <h1 className="text-center my-5 font-bold text-2xl">Admin Home</h1>
                                <li>
                                    <NavLink to='/dashboard/adminHome'><span className="text-white flex gap-2 items-center font-bold"><FaHome className="text-xl"></FaHome> Admin Home</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addItems'><span className="text-white flex gap-2 items-center font-bold"><FaBurger className="text-xl"></FaBurger> Add Item</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/adminHome'><span className="text-white flex gap-2 items-center font-bold"><FaEdit className="text-xl"></FaEdit> Manage Items</span></NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/adminHome'><span className="text-white flex gap-2 items-center font-bold"><IoFastFoodOutline className="text-xl"></IoFastFoodOutline> Manage Order</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users'><span className="text-white flex gap-2 items-center font-bold"><FaUsers className="text-xl"></FaUsers> All User</span></NavLink>
                                </li>
                            </> :
                                <> <h1 className="text-center my-5 font-bold text-2xl">User Home</h1>
                                    <li>
                                        <NavLink to='/dashboard/cart'><span className="text-white flex gap-2 items-center font-bold"><FaShoppingCart className="text-xl"></FaShoppingCart> My Cart ({cart.length})</span></NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/review'><span className="text-white flex gap-2 items-center font-bold"><VscFeedback className="text-xl"></VscFeedback> Add Review</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymentHistory'><span className="text-white flex gap-2 items-center font-bold"><MdPayment className="text-xl"></MdPayment> My Payment History</span></NavLink>
                                    </li>
                                </>
                        }
                    </div>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;