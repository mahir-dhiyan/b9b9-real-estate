import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="space-y-8 p-2 md:p-0">
              <Helmet>
                <title>About - Real State</title>
            </Helmet>
            <h3 className="text-3xl text-[#5C2751] font-bold text-center mt-6">About Us</h3>
            <p className="text-xl text-[#5C2751] font-bold">
            Welcome to Real State, your trusted partner in finding the perfect residential property. At Real State, we specialize in a diverse range of residential properties, including single-family homes, townhouses, apartments, student housing, senior living communities, and vacation rentals. Our mission is to connect you with a home that fits your lifestyle, needs, and dreams.
            </p>
            <h3 className="text-3xl text-[#5C2751] font-bold text-center mt-6">Our Story</h3>
            <p className="text-xl text-[#5C2751] font-bold">
            Founded with a passion for real estate and a commitment to excellence, Real State has grown into a premier real estate company dedicated to providing exceptional service and unparalleled expertise. Our team of experienced professionals is here to guide you through every step of the home buying, selling, or renting process. Whether you are a first-time homebuyer, a seasoned investor, or looking for the perfect vacation rental, we have the resources and knowledge to help you achieve your goals.
            </p>
            <h3 className="text-3xl text-[#5C2751] font-bold text-center mt-6">Our Values</h3>
            <p className="text-xl text-[#5C2751] font-bold">
            <ul className="space-y-5 list-disc">
                <li className="text-xl font-bold"><span className="font-bold text-2xl ">Integrity: </span>We believe in honesty and transparency in all our dealings. Trust is the foundation of our relationships with clients.</li>
                <li className="text-xl font-bold"><span className="font-bold text-2xl">Excellence: </span>We strive for the highest standards in everything we do, ensuring that you receive the best service and results.</li>
                <li className="text-xl font-bold"><span className="font-bold text-2xl">Customer-Centric: </span>Your satisfaction is our priority. We listen to your needs and work tirelessly to meet them.</li>
                <li className="text-xl font-bold"><span className="font-bold text-2xl">Innovation: </span>We leverage the latest technology and market insights to provide you with up-to-date information and innovative solutions.</li>
            </ul>
            </p>
        </div>
    );
};

export default About;