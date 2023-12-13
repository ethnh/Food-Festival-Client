


const MenuCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="lg:flex space-x-2 shadow-xl p-3 rounded-md">
            <img style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }} className="w-[120px] border-4 border-gray-500" src={image} alt="" />
            <div className="space-y-2">
                <h3 className="uppercase text-lg font-bold">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="badge badge-warning badge-outline text-lg font-semibold">${price}</p>
        </div>
    );
};

export default MenuCard;