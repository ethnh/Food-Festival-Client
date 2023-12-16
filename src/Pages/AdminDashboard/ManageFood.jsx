import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useMenu from "../../Hooks/useMenu";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageFood = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }
        });
    }
    return (
        <div>
            <h1 className="text-center text-2xl font-bold my-4 bg-slate-100">Here total <span className="text-green-500">{menu.length}</span> food items available. You can update and delete a specific item</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Index {menu.length}
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price} $</td>
                                    <td>
                                        <Link to={`/dashboard/updateItems/${item._id}`}>
                                            <button className="btn"><FaEdit className="text-red-400"></FaEdit></button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => handleDeleteItem(item)} className="btn"><FaTrash className="text-red-600"></FaTrash></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageFood;