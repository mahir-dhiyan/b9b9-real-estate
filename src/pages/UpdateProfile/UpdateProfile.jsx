import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/Authproviders";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhoto(user.photoURL || '');
            setEmail(user.email || '');
        }
    }, [user]);

    const notifySuccess = () => {
        toast.success('Profile Updated Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const notifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        updateUserProfile(name, photo)
            .then(() => {
                notifySuccess();
            })
            .catch((error) => {
                console.error(error);
                notifyError('Failed to update profile');
            });
    };

    return (
        <div>
            <Helmet>
                <title>Update Profile - Real Estate</title>
            </Helmet>
            <h3 className="text-3xl font-bold text-center mt-6">Update Profile</h3>
            <form onSubmit={handleUpdate} className="card-body md:w-3/4 lg:1/2 mx-auto">
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
                        onChange={(e) => setName(e.target.value)} 
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
                        onChange={(e) => setPhoto(e.target.value)} 
                        placeholder="Photo URL" 
                        className="input input-bordered" 
                        required 
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white text-xl border-none bg-[#5C2751]">Update Profile</button>
                </div>
            </form>
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

export default UpdateProfile;
