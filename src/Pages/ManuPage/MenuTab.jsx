
import { Link } from 'react-router-dom';
import MenuCard from './MenuCard';
import CoverImageTwo from '../Shared/CoverImage/CoverImageTwo';

const MenuTab = ({ items, title, img, description }) => {
    return (
        <div>
            {title && <CoverImageTwo img={img} title={title} description={description}></CoverImageTwo>}
            <div className="grid md:grid-cols-3 gap-5 p-4">
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center my-8">
                <Link to={`/allItems/${title}`}><button className="px-4 py-2 bg-[#FF4860] rounded-2xl btn-outline text-white font-bold">Chick here To choice and Order</button></Link>
            </div>
        </div>
    );
};

export default MenuTab;