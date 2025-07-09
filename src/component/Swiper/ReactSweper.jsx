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
      src="/hungry2.jpg"
      alt="Digital Marketing"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      8 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Hungry People
    </div>
  </div>

</>

// card 1 end 

const card2 = <>
<div className="relative rounded-xl overflow-hidden group cursor-pointer">
    <img
      src="/hungry1.jpg"
      alt="Digital Marketing"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      50 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Hungry People
    </div>
  </div>

</>
// card 2 end 
const card3 = <>
<div className="relative rounded-xl overflow-hidden group cursor-pointer">
    <img
      src="/hungry3.jpg"
      alt="Digital Marketing"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      40 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Hungry People
    </div>
  </div>

</>
// card 3 end 

const card4 = <>
<div className="relative rounded-xl overflow-hidden group cursor-pointer">
    <img
      src="/hungry1.jpg"
      alt="Digital Marketing"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    {/* <div className="absolute top-2 right-2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
      35 listing
    </div> */}
    <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
      Hungry People
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
      slidesPerView={2}
      
      
    >
      <SwiperSlide>{card1}</SwiperSlide>
      <SwiperSlide>{card2}</SwiperSlide>
      <SwiperSlide>{card3}</SwiperSlide>
      <SwiperSlide>{card4}</SwiperSlide>
      
      
    
    </Swiper>
    );
};

export default ReactSweper;