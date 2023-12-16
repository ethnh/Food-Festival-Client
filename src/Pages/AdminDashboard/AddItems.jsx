
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddItems = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
                offer: res.data.offer,
                rating: res.data.rating,
                posiviteOne: res.data.posiviteOne,
                posiviteTwo: res.data.posiviteTwo
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            if (menuRes.data.insertedId) {
                // show success popup
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    return (
        <div>
            <h1 className="text-center text-2xl font-bold my-5">Add a food Item</h1>
            <div className="bg-sky-200 p-3 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* photo input */}
                    <div className="my-4">
                        <label className="label">
                            <span className="label-text font-bold">Food Image</span>
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            name="image"
                            className="file-input w-full" />
                        {errors.image && <span className='text-red-500'>This Image field is required</span>}
                    </div>
                    {/* recipe name */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Name</span>
                        </label>
                        <input {...register("name", { required: true })}
                            type="text"
                            placeholder="Recipe name"
                            className="input input-bordered w-full " />
                        {errors.name && <span className='text-red-500'>This name field is required</span>}
                    </div>

                    <div className="lg:flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Category Name</span>
                            </label>
                            <select defaultValue='default' {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option value="default" disabled>Select a category</option>
                                <option value={'homeMenuOverview'}>Popular</option>
                                <option value={'burger'}>Burger</option>
                                <option value={'pizza'}>Pizza</option>
                                <option value={'cake'}>Cake</option>
                                <option value={'wings'}>Chicken Wings</option>
                                <option value={'sandwich'}>Sandwich</option>
                                <option value={'bbq'}>BBQ</option>
                            </select>
                            {errors.category && <span className='text-red-500'>This category field is required</span>}
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <input {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full " />
                            {errors.price && <span className='text-red-500'>This price field is required</span>}
                        </div>
                    </div>

                    <div className="lg:flex gap-6">
                        {/* offer */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Offer</span>
                            </label>
                            <input {...register("offer", { required: true })}
                                type="number"
                                placeholder="Food Offer"
                                className="input input-bordered w-full " />
                            {errors.offer && <span className='text-red-500'>This Image field is required</span>}
                        </div>

                        {/* rating */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <input {...register("rating", { required: true })}
                                type="number"
                                placeholder="Rating of Food"
                                className="input input-bordered w-full " />
                            {errors.rating && <span className='text-red-500'>This Image field is required</span>}
                        </div>
                    </div>


                    <div className="lg:flex gap-6">
                        {/* posiviteOne */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Positive Line 1</span>
                            </label>
                            <input {...register("posiviteOne", { required: true })}
                                type="text"
                                placeholder="Positive One Line of the food in 5 words"
                                className="input input-bordered w-full " />
                            {errors.posiviteOne && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* posiviteTwo */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Positive Line 2</span>
                            </label>
                            <input {...register("posiviteTwo", { required: true })}
                                type="text"
                                placeholder="Positive Another One Line of the food in 5 words"
                                className="input input-bordered w-full " />
                            {errors.posiviteTwo && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>

                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details (15 words required)"></textarea>
                        {errors.image && <span className='text-red-500'>This Image field is required</span>}
                    </div>



                    <div className="text-center my-4">
                        <button className="btn">Add Food Item </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;