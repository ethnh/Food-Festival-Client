import image1 from '../../assets/img/smImg1.jpg'

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CoverImageThree from '../Shared/CoverImage/CoverImageThree';


const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);
    }

    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Login</title>
            </Helmet>
            <CoverImageThree img={image1} title={'Login Now'} description={'Welcome to Food Festival family'}></CoverImageThree>
            <div className="hero min-h-[80vh] bg-base-200">

                <div className="flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="px-4 py-2 bg-orange-500 rounded-2xl btn-outline text-white font-bold">Login Now</button>
                            </div>
                            <div>
                                <p className="my-3">New to here? Create an account <Link to='/signUp' className="text-blue-500 underline">Register</Link></p>
                            </div>
                            <div className="divider">or,</div>
                            {/* <div className="space-y-3">
                            <button onClick={handleGoogleLogIn} className="flex items-center gap-3 w-3/4 rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><FaGoogle className="text-green-600"></FaGoogle>Continue With Google</button>
                            <button onClick={handleGithubLogIn} className="flex items-center gap-3 w-3/4 rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><FaGithub></FaGithub>Continue With Github</button>
                        </div> */}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;