
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import Estates from "./Estates/Estates";

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