import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authproviders";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const notifyError = () => {
        toast.error('Incorrect Email or Password. Check Again!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        });
    };
   
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                console.log(result.user);
             
                navigate(location?.state ? location.state : '/');
            
            })
            .catch(error => {
                console.error(error);
                notifyError();
               
            })

    }
    return (

        <div className="h-screen">
            <h3 className="text-3xl font-bold text-center mt-6">Please Login</h3>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:1/2 mx-auto">
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

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"

            />
           




        </div>
    );
};

export default Login;