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
  {/* <swiper-container >
  <swiper-slide ><img src="https://i.ibb.co/WWBjWDL/Gemini-Generated-Image-27zet627zet627ze.jpg" alt="" /></swiper-slide>
  <swiper-slide ><img src="https://i.ibb.co/NnHYVrm/4.jpg" alt="" /></swiper-slide>
  <swiper-slide ><img src="https://i.ibb.co/HzNRjBJ/7.jpg" alt="" /></swiper-slide>
<img className='  ' src="https://i.ibb.co/WWBjWDL/Gemini-Generated-Image-27zet627zet627ze.jpg" alt="" />

  </swiper-container> */} 

<Swiper navigation={true}  modules={[Navigation]} className="mySwiper md:h-[550px] rounded-3xl">
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




 // return (
  //   //   <div classNameName="carousel w-full md:h-96">
  //   //   <div id="slide1" classNameName="carousel-item relative w-full">
  //   //     <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" classNameName="w-full" />
  //   //     <div classNameName="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  //   //       <a href="#slide4" classNameName="btn btn-circle">❮</a> 
  //   //       <a href="#slide2" classNameName="btn btn-circle">❯</a>
  //   //     </div>
  //   //   </div> 
  //   //   <div id="slide2" classNameName="carousel-item relative w-full">
  //   //     <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" classNameName="w-full" />
  //   //     <div classNameName="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  //   //       <a href="#slide1" classNameName="btn btn-circle">❮</a> 
  //   //       <a href="#slide3" classNameName="btn btn-circle">❯</a>
  //   //     </div>
  //   //   </div> 
  //   //   <div id="slide3" classNameName="carousel-item relative w-full">
  //   //     <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" classNameName="w-full" />
  //   //     <div classNameName="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  //   //       <a href="#slide2" classNameName="btn btn-circle">❮</a> 
  //   //       <a href="#slide4" classNameName="btn btn-circle">❯</a>
  //   //     </div>
  //   //   </div> 
  //   //   <div id="slide4" classNameName="carousel-item relative w-full">
  //   //     <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" classNameName="w-full" />
  //   //     <div classNameName="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  //   //       <a href="#slide3" classNameName="btn btn-circle">❮</a> 
  //   //       <a href="#slide1" classNameName="btn btn-circle">❯</a>
  //   //     </div>
  //   //   </div>
  //   // </div>
    
  // );