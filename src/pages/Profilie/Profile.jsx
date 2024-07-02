import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/Authproviders";
import { Link } from "react-router-dom";

const Profile = () => {
    const {user}=useContext(AuthContext);
    const name=user.displayName;
    const email=user.email;
    const photo=user.photoURL;
    return (
        <div>
        <Helmet>
            <title>Profile - Real Estate</title>
        </Helmet>
        <h3 className="text-3xl font-bold text-center mt-6">Your Profile</h3>
        <div className=" flex justify-center mt-6">
            <img className="w-64 rounded-3xl" src={user.photoURL} alt="User Photo" />
        </div>
        <form className="card-body md:w-3/4 lg:1/2 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text ">Email</span>
                </label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    placeholder="Email" 
                    className="input input-bordered text-xl font-semibold " 
                    disabled 
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    disabled 
                    placeholder="Name" 
                    className="input input-bordered" 
                    required 
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input 
                    type="text" 
                    name="photo" 
                    value={photo} 
                    disabled 
                    placeholder="Photo URL" 
                    className="input input-bordered" 
                    required 
                />
            </div>
            <div className="form-control mt-6">
                <Link className="" to='/updateProfile'><button className="btn w-full border-yellow-300 border-4 text-white text-xl border-none bg-[#5C2751]">Go to Update Profile</button></Link>
            </div>
        </form>
       
    </div>
    );
};

export default Profile;