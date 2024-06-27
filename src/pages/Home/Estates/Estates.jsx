
const Estates = ({ estate }) => {
   const {id,image,estate_title,segment_name,description,price,status,are,location,facilities,bedrooms,bathrooms,year_built}=estate;
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img className="h-96"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="card-actions ">
                    <button className="btn  text-white md:text-lg bg-[#5C2751] ">View Details</button>
                </div>
            </div>
        </div>
    );
};
export default Estates;