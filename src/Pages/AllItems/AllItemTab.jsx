import AllItemsCard from "./AllItemsCard";


const AllItemTab = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    items.map(item => <AllItemsCard key={item._id} item={item}></AllItemsCard>)
                }
            </div>
        </div>
    );
};

export default AllItemTab;