import { Helmet } from "react-helmet-async";
import Map from "../Map/Map";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const BookAppointment = () => {
    return (
        <div>
            <Helmet>
                <title>Book Appointment - Real State</title>
            </Helmet>
            <div className="container mx-auto p-4 text-[#5C2751] font-bold">
                <h3 className="text-4xl font-bold text-center mt-6">Book an Appointment</h3>
                <p className="text-xl text-center mt-4">
                    To book an appointment, please call us during our business hours, or Email us. Our team is available to assist you with all your real estate needs.
                </p>
               
                <div className="text-center space-y-2 mt-6">
                    <h4 className="text-3xl font-semibold">Calling Hours</h4>
                    
                    <p className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-lg">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-lg">Sunday: Closed</p>
                    <p className="text-lg">Email: <a href="mailto:contact@realstate.com" className="text-blue-500">contact@realstate.com</a></p>
                    <p className="text-lg">Phone: <a href="tel:123-456-7890" className="text-blue-500">123-456-7890</a></p>
                </div>
                <div className="mt-4">
                <h3 data-aos='zoom-in-up' className="text-4xl font-bold text-center mt-6">Find Us on Map</h3>
                </div>
                <div className="mt-6">
                    <Map></Map>
                </div>
                <h3 data-aos='zoom-in-up' className="text-4xl font-bold text-center mt-10">Our Services</h3>
                <p data-aos='zoom-in-up' className="text-xl mt-4">
                    At Real State, we offer a comprehensive range of services tailored to meet the diverse needs of our clients:
                </p>
                <ul data-aos='zoom-in-up' className="list-disc list-inside mt-4 text-lg">
                    <li><strong>Buying:</strong> Explore our extensive listings of single-family homes, townhouses, and apartments. Our agents will help you find the perfect home and navigate the buying process with ease.</li>
                    <li><strong>Selling:</strong> Maximize the value of your property with our expert marketing strategies and dedicated sales team.</li>
                    <li><strong>Renting:</strong> Whether you are looking for student housing, senior living communities, or vacation rentals, we have a wide selection of rental properties to choose from.</li>
                    <li><strong>Property Management:</strong> Our professional property management services ensure that your investment is well-maintained and profitable.</li>
                </ul>
                <h3 data-aos='zoom-in-up' className="text-4xl font-bold text-center mt-10">Why Choose Real State?</h3>
                <ul data-aos='zoom-in-up' className="list-disc list-inside mt-4 text-lg">
                    <li><strong>Expertise:</strong> Our team of real estate professionals has extensive knowledge of the local market and a proven track record of success.</li>
                    <li><strong>Personalized Service:</strong> We take the time to understand your unique needs and provide tailored solutions to match.</li>
                    <li><strong>Comprehensive Listings:</strong> Our diverse portfolio of residential properties ensures that we have something for everyone.</li>
                    <li><strong>Community Focus:</strong> We are deeply rooted in the communities we serve and are committed to making a positive impact.</li>
                </ul>
                <h3 data-aos='zoom-in-up' className="text-4xl font-bold text-center mt-10">Contact Us</h3>
                <p data-aos='zoom-in-up' className="text-xl mt-4 text-center">
                    Ready to start your real estate journey? Get in touch with us today!
                </p>
                <div data-aos='zoom-in-up' className="text-center mt-6">
                    <p className="text-lg">Email: <a href="mailto:contact@realstate.com" className="text-blue-500">contact@realstate.com</a></p>
                    <p className="text-lg">Phone: <a href="tel:123-456-7890" className="text-blue-500">123-456-7890</a></p>
                    <p className="text-lg">Address: 123 Real Estate St, City, State, ZIP</p>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
