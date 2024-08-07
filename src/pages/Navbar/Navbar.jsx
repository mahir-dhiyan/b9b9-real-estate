import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import 'animate.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/Authproviders";
const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>

        <div className="md:flex md:flex-row md:space-y-0 md:gap-4 flex-col space-y-2  ">

            <li ><NavLink className='btn bg-transparent font-semibold text-base  border-none' to="/">Home</NavLink></li>
            <li><NavLink className='btn  bg-transparent font-semibold text-base border-none' to="/about">About</NavLink></li>
            <li><NavLink className='btn  bg-transparent font-semibold text-base border-none' to="/bookappoinment">Book An Appointment</NavLink></li>
            <li><NavLink className='btn  bg-transparent font-semibold text-base border-none' to="/register">Register</NavLink></li>
            <li><NavLink className='btn  bg-transparent font-semibold text-base border-none' to="/profile">Profile</NavLink></li>
            <li><NavLink className='btn  bg-transparent font-semibold text-base border-none' to="/updateProfile">Update Profile</NavLink></li>
           
        </div>



    </>
    return (
        <div className="navbar max-w-7xl   mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 navigation">
                        {user ?
                            <li className="btn bg-transparent font-semibold text-base  border-none md:hidden">{user.displayName}</li>
                            :
                            <li ><NavLink className='btn bg-transparent font-semibold text-base  border-none' to="/login">Login</NavLink></li>

                        }
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-[#5C2751] font-bold text-3xl animate__animated animate__zoomIn ">Real State</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 navigation">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?

                    <>

                        <div className="avatar online mr-2">
                            <div className="w-10 md:w-14 rounded-full group">
                                <img src={user.photoURL} alt="User Photo" />
                                <div className="absolute top-20 md:top-24 inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="text-black font-bold text-xl">{user.displayName}</div>
                                </div>
                            </div>
                        </div>
                        <Link onClick={handleLogout}>
                            <a className="btn text-white bg-[#5C2751] border-none animate__animated animate__zoomIn ">Log Out</a></Link>

                    </>
                    :

                    <Link to='/login'>
                        <a className="btn text-white bg-[#5C2751] border-none animate__animated animate__zoomIn ">Log in</a></Link>

                }

            </div>
        </div>
    );
};

export default Navbar;