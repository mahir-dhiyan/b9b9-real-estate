import { Result } from "postcss";
import Header from "./Header/Header";
import { useEffect, useState } from "react";

const Home = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch('estates.json')
            .then(result => result.json())
            .then(data => setEstates(data));
    }, [])
    return (
        <div>
            <Header></Header>
            {
                estates.map(estate => (
               <div className=""> 
               <p>{estate.id}</p>
               <img src={estate.image} alt="" /></div>
                ))
            }
        </div>
    );
};

export default Home;