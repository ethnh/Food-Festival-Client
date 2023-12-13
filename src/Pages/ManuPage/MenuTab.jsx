
import { Link } from 'react-router-dom';
import MenuCard from './MenuCard';
import CoverImageTwo from '../Shared/CoverImage/CoverImageTwo';

const MenuTab = ({ items, title, img, description }) => {
    return (
        <div>
            {title && <CoverImageTwo img={img} title={title} description={description}></CoverImageTwo>}
            <div className="grid md:grid-cols-3 gap-10 p-4">
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}><button className="btn btn-primary border-0 border-b-4 mt-4 text-white mb-16"> Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuTab;