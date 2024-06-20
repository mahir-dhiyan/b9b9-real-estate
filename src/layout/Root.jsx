import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="mx-auto max-w-6xl border">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;