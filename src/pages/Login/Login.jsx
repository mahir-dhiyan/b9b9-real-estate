import { Link } from "react-router-dom";

const Login = () => {
    return (

        <div className="">
        <h3 className="text-3xl font-bold text-center">Please Login</h3>
        <form className="card-body md:w-3/4 lg:1/2 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn text-white text-xl border-none bg-[#5C2751]">Login</button>
            </div>
        </form>
        <p className="text-center font-semibold text-lg mt-4">Do not have an account? <Link to="/register" className="font-bold text-[#5C2751] text-2xl  hover:text-white">Register</Link></p>
    </div>
    );
};

export default Login;