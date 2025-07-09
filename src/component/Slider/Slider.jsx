import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



import { Autoplay } from 'swiper/modules';




import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Slider = () => {
  const Slider1 = <>
  <div className="flex flex-col justify-center lg:flex-row items-center p-12 lg:p-24">

<div className=" flex-1">

  <h2 className="text-2xl lg:text-4xl font-bold py-1">
  Share Excess, Spread Kindness
  </h2>
  <p className='w-11/12'>
  Don't waste food — share it with those in need near you.
  </p>
  <button className="btn my-4 ">Get Started</button>
</div>

<div className="flex-1 rounded">
  <img className='rounded-xl' src="./hungry1.jpg"  />
</div>
</div>


</>

const Slider3 = <>
  <div className="flex flex-col justify-center lg:flex-row items-center p-12 lg:p-24">

<div className=" flex-1">

  <h2 className="text-2xl lg:text-4xl font-bold py-1">
  Zero Waste, Full Hearts
  </h2>
  <p className='w-11/12'>
  Join our mission to reduce food waste and fight hunger — one meal at a time.
  </p>
  <button className="btn my-4 ">Get Started</button>
</div>

<div className="flex-1 rounded">
  <img className='rounded-xl' src="./hungry2.jpg"  />
</div>
</div>


</>

const Slider2 = <>
  <div className="flex flex-col justify-center lg:flex-row items-center p-12 lg:p-24">

<div className=" flex-1">

  <h2 className="text-2xl lg:text-4xl font-bold py-1">
  Turn Leftovers into Hope
  </h2>
  <p className='w-11/12'>
  Your extra meal could be someone’s only meal today.
  </p>
  <button className="btn my-4 ">Get Started</button>
</div>

<div className="flex-1 rounded">
  <img className='rounded-xl' src="./hungry3.jpg"  />
</div>
</div>


</>

    return (
        <Swiper 
        
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        loop={true}
          


      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      // onSwiper={(swiper) => }
      // onSlideChange={() => console.log('slide change')}

      
    >
      <SwiperSlide >{Slider1}</SwiperSlide>
      <SwiperSlide>{Slider2}</SwiperSlide>
      <SwiperSlide>{Slider3}</SwiperSlide>
    </Swiper>
    );
};

export default Slider;