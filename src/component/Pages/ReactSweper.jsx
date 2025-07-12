import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper , SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const ReactSweper = () => {

const card1 = <>
<div className="relative rounded-xl overflow-hidden group cursor-pointer">
    <img
      src="https://i.ibb.co/yxqKkWL/pexels-pixabay-271624.jpg"
      alt="Apartment D1"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      8 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Apartment No: 5D
    </div>
  </div>

</>

// card 1 end 

const card2 = <>
<div className="relative rounded-xl overflow-hidden group cursor-pointer">
    <img
      src="https://i.ibb.co/3mHzn31q/pexels-pixabay-269218.jpg"
      alt=" Apartment No: 3A"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      50 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Apartment No: 3A
    </div>
  </div>

</>
// card 2 end 
const card3 = <>
<div className="relative rounded-xl overflow-hidden group cursor-pointer">
    <img
      src="https://i.ibb.co/NdYhd2mv/pexels-pixabay-260046.jpg"
      alt="Apartment No: 4A"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      40 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Apartment No: 4A
    </div>
  </div>

</>
// card 3 end 

const card4 = <>
<div className="relative rounded-xl overflow-hidden group cursor-pointer">
    <img
      src="https://i.ibb.co/7J1t6XWJ/pexels-jvdm-1457841.jpg"
      alt="Digital Marketing"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      35 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Apartment No: 4D
    </div>
  </div>

</>
const card5 = <>
<div className="https://i.ibb.co/nsYSZngv/pexels-homelane-com-492179-1776574.jpg">
    <img
      src="https://i.ibb.co/V0xmNpK6/pexels-fotoaibe-1571472-1.jpg"
      alt="Apartment No: 4C"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      35 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Apartment No: 4C
    </div>
  </div>

</>
const card6 = <>
<div className="relative rounded-xl overflow-hidden group cursor-pointer">
    <img
      src="https://i.ibb.co/5Wxq7RWP/pexels-fotoaibe-1668860.jpg"
      alt="Apartment No: 3C"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      35 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Apartment No: 3C
    </div>
  </div>

</>



    return (
        <Swiper
             modules={[EffectFade, Autoplay]}
                      // Smooth fade transition
      speed={4000}
      autoplay={{
          delay: 300, // 3 seconds
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}                  // Duration of transition (ms)
        // Optional: auto slide every 3s
      loop={true}                  // Optional: infinite loop
      spaceBetween={50}
      slidesPerView={3}
      
      
    >
      <SwiperSlide>{card1}</SwiperSlide>
      <SwiperSlide>{card2}</SwiperSlide>
      <SwiperSlide>{card3}</SwiperSlide>
      <SwiperSlide>{card4}</SwiperSlide>
      <SwiperSlide>{card5}</SwiperSlide>
      <SwiperSlide>{card6}</SwiperSlide>
      
      
    
    </Swiper>
    );
};

export default ReactSweper;