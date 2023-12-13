
import MenuCard from './MenuCard';

const MenuTab = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default MenuTab;