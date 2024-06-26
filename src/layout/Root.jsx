import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import '../layout/root.css'
import Footer from "../pages/Home/Footer/Footer";
import { HelmetProvider } from "react-helmet-async";
const Root = () => {
    return (
<HelmetProvider>
<div className=" bg-[#C5D1EB] back ">
           <div className="bg-[#92AFD7] sticky top-0 z-10"> <Navbar className=""></Navbar></div>
            <div className="mx-auto max-w-6xl h-full ">
                <Outlet></Outlet>
            </div>
            <div className=""><Footer></Footer></div>
        </div>

</HelmetProvider>
       
    );
};

export default Root;