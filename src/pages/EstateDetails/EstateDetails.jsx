import { useLoaderData, useParams } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

const EstateDetails = () => {
    const { fId } = useParams();
    const estates = useLoaderData();
    const intId = parseInt(fId);
    const estate = estates.find(estate => (estate.id === intId));
    // console.log(estate);
    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities, bedrooms, bathrooms, year_built } = estate;
    const facilitiesList = [];
    for (const facility of facilities){
        facilitiesList.push(<div className="text-lg font-medium" key={facility} > <FaHandPointRight className="inline mr-2" />{facility}</div>);
    }
    return (
        <div className="card lg:card-side bg-[#F0F4EF] shadow-xl mt-4 ">
            <div className="">
                <img className="h-96  rounded-2xl"
                    src={image}
                    alt="Property Image" />
            </div>
            <div className="p-2 md:p-4  space-y-2">
                <h2 className="text-5xl font-semibold">{estate_title}</h2>
                <p className="text-lg">{description}</p>
                <div className="md:flex-row md:flex flex-col md:justify-between">

                    <p className="text-lg font-bold flex">Segment:<p className="ml-2 font-medium "> {segment_name}</p></p>
                    <p className="text-lg font-bold flex">Built Year:<p className="ml-2 font-medium"> {year_built}</p></p>

                </div>
                <div className="md:flex-row md:flex flex-col md:justify-between">

                    <p className="text-lg font-bold flex">Number of Bedrooms:<p className="ml-2 font-medium "> {bedrooms}</p></p>
                    <p className="text-lg font-bold flex">Number of Bathrooms:<p className="ml-2 font-medium"> {bathrooms}</p></p>

                </div>
                <div className="flex justify-between">

                    <p className="text-lg font-bold flex">Area:<p className="ml-2 font-medium "> {area}</p></p>
                    <p className="text-lg font-bold flex">Location:<p className="ml-2 font-medium"> {location}</p></p>

                </div>
                <div className="flex justify-between">

                    <p className="text-lg font-bold flex text-green-500">Price:<p className="ml-2 font-medium text-black"> {price}</p></p>
                    <p className="text-lg font-bold flex text-yellow-500">Status:<p className="ml-2 font-medium text-black"> {status}</p></p>

                </div>
                <div className="">
                <p className="text-lg font-bold flex">Facilities:</p>
                       <div className="grid grid-cols-2">
                       {facilitiesList}
                       </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;