
import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// import useMenu from '../../../Hooks/useMenu';
import PopularMenuCard from './PopularMenuCard';

const PopularMenuOverview = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle heading={'Todays Special'} subHeading={'Here s some popular menu list, Which are recommended from chef'}></SectionTitle>
            <div className='flex justify-center'>
                <div className="grid md:grid-cols-3 gap-10 justify-center">
                    {
                        popular.map(item => <PopularMenuCard key={item._id} item={item}></PopularMenuCard>)
                    }
                </div>
            </div>
            {/* <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">View Full Menu</button> */}
        </section>
    );
};

export default PopularMenuOverview;