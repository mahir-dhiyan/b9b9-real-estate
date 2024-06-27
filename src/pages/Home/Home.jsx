
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import Estates from "./Estates/Estates";
import 'animate.css';
const Home = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch('estates.json')
            .then(result => result.json())
            .then(data => setEstates(data));
    }, [])
    return (
        <div>
            <Header ></Header>
            <div className="m-4 animate__animated animate__lightSpeedInLeft ">

            <h2 className="text-center text-[#5C2751] font-extrabold text-5xl">Discover Your Dream Home:</h2>
            <h2 className="text-center text-[#5C2751] font-extrabold text-2xl">Exclusive Listings of Prime Properties</h2>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0 mt-4 ">
            {
                estates.map(estate => (
               <Estates key={estate.id} estate={estate}></Estates>
                ))
            }
            </div>
           
        </div>
    );
};

export default Home;