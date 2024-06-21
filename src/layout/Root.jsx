import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Root = () => {
    return (

        <div className=" bg-[#C5D1EB]">
           <div className="bg-[#92AFD7]"> <Navbar className=""></Navbar></div>
            <div className="mx-auto max-w-6xl h-screen">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Root;