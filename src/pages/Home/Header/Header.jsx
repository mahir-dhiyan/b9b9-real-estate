// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import slider1 from '../../../assets/slider1.jpeg';
import slider2 from '../../../assets/slider2.jpeg';
import slider3 from '../../../assets/slider3.jpeg';
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';
const Header = () => {
  
 
 return(
  <>
  
<Swiper navigation={true} loop={true}  modules={[Navigation]} className="mySwiper md:h-[550px] rounded-3xl">
        <SwiperSlide  >
          <div 
          className="relative flex  justify-center items-center h-full min-h-80 bg-center bg-cover "
          style={{ backgroundImage: `url(${slider2})` }}
          >
            <div className="absolute min-h-80 inset-0 bg-gradient-to-t from-black to-black opacity-30"></div>
            <h1 className='md:text-7xl text-4xl z-10 font-semibold text-center text-[#C5D1EB]'> Find Your Space, Embrace the Place!</h1></div></SwiperSlide>
        <SwiperSlide  >
          <div 
          className="relative flex  justify-center items-center h-full min-h-80 bg-center bg-cover "
          style={{ backgroundImage: `url(${slider3})` }}
          >
            <div className="absolute  inset-0 bg-gradient-to-t from-black to-black opacity-30"></div>
            <h1 className='md:text-7xl text-4xl z-10 font-semibold text-center text-[#C5D1EB]'>Step Into Your New Life!</h1></div></SwiperSlide>
        <SwiperSlide  >
          <div 
          className="relative flex  justify-center items-center h-full min-h-80 bg-center bg-cover "
          style={{ backgroundImage: `url(${slider1})` }}
          >
            <div className="absolute  inset-0 bg-gradient-to-t from-black to-black opacity-30"></div>
            <h1 className='md:text-7xl text-4xl z-10 font-semibold text-center text-[#C5D1EB]'>Your Dream Home Awaits! </h1></div></SwiperSlide>
       
        
      </Swiper>
  
  </>
 )
 
};

export default Header;
