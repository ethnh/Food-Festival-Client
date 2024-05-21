import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuOverviewCard from "./MenuOverviewCard";
import { Link } from "react-router-dom";


const MenuOverView = () => {
    const [menuOverView, setmenuOverView] = useState([]);
    useEffect(() => {
        fetch('https://food-festival-server.vercel.app/menu')
            .then(res => res.json())
            .then(data => setmenuOverView(data))
    }, [])
    const homePageMenu = menuOverView.filter(item => item.category === 'homeMenuOverview') //homePageMenu
    return (
        <section className="mb-12">
            <SectionTitle heading={'Menu Overview'} subHeading={'Here some overview food from FOOD MENU, Click Order Dood From Menu Button form explore'}></SectionTitle>
            <div className='flex justify-center p-3'>
                <div className="grid md:grid-cols-3 gap-10 justify-center">
                    {
                        homePageMenu.map(item => <MenuOverviewCard key={item._id} item={item}></MenuOverviewCard>)
                    }
                </div>
            </div>
            <div className="text-center my-10">
                <Link to='/menu'><button className="px-4 py-2 bg-[#FF4860] rounded-2xl btn-outline text-white font-bold">Order Food From Menu</button></Link>
            </div>
        </section>
    );
};

export default MenuOverView;