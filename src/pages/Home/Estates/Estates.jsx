
const Estates = ({ estate }) => {
   const {id,image,estate_title,segment_name,description,price,status,area,location,facilities,bedrooms,bathrooms,year_built}=estate;
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img className="h-96"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
                <h2><span className="text-lg font-semibold">Segment:</span> {segment_name}</h2>
                <p>{description}</p>
                <div className="flex justify-between">
                <h2><span className="text-lg font-semibold text-green-600">Price:</span> {price}</h2>
                <h2><span className="text-lg font-semibold text-yellow-500">Status:</span> {status}</h2>
                </div>
              
                <h2><span className="text-lg font-semibold ">Total Area: </span> {area}</h2>
                <h2><span className="text-lg font-semibold ">Location: </span> {location}</h2>
               
                <div className="card-actions ">
                    <button className="btn  text-white md:text-lg bg-[#5C2751] ">View Details</button>
                </div>
            </div>
        </div>
    );
};
export default Estates;