import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner-container h-100px md:h-[500px] lg:h-[500px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="h-full w-full object-cover"
              src="https://sportsmatik.com/uploads/sports-corner/equipment-bn.jpg"
              alt="Slide 1"
            />
            {/* Text overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-14 bg-black bg-opacity-50 text-white">
              <h1 className="text-xl  mr-7 sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9fef15] to-blue-500 leading-tight drop-shadow-md">
                ELEVATE YOUR GAME WITH PREMIUM SPORTS GEAR!
              </h1>

              <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg text-[white] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discover top-quality sports equipment and apparel for every
                athlete. From the field to the court, we have what you need to
                elevate your game.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="h-full w-full object-cover"
              src="https://sportsmatik.com/uploads/sports-corner/equipment-bn.jpg"
              alt="Slide 2"
            />
            {/* Text overlay */}
            <div className="absolute top-0 px-14 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h1 className="text-xl mr-7 sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E26FC1] to-blue-500 leading-tight drop-shadow-md">
                TOP-QUALITY EQUIPMENT FOR EVERY ATHLETE!
              </h1>

              <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg text-[white] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Gear up for excellence with our premium sports equipment.
                Designed to elevate your performance and help you achieve your
                goals!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="h-full w-full object-cover"
              src="https://sportsmatik.com/uploads/sports-corner/equipment-bn.jpg"
              alt="Slide 3"
            />
            {/* Text overlay */}
            <div className="absolute top-0 px-14 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h1 className="text-xl mr-7 sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 leading-tight drop-shadow-md">
                SCORE BIG WITH LIMITED-TIME OFFERS!
              </h1>

              <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg text-[white] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Unlock exclusive discounts on top-quality sports gear today.
                Hurry, these deals won’t last long!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="h-full w-full object-cover"
              src="https://sportsmatik.com/uploads/sports-corner/equipment-bn.jpg"
              alt="Slide 4"
            />
            {/* Text overlay */}
            <div className="absolute top-0 px-14 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h1 className="text-3xl mr-7 sm:text-3xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e43535] to-yellow-500 leading-tight drop-shadow-md">
                Gear Up for Victory!
              </h1>

              <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg text-[white] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discover top-quality sports equipment and apparel for every
                athlete. From the field to the court, we have what you need to
                elevate your game.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

{
  /*
  ///////////////////////////////////////////////////////////////////////////////////////////////// 
  <div>
        <div className="hero relative bg-[url('https://img.freepik.com/free-vector/sport-equipment-banner_1284-32611.jpg?t=st=1733255516~exp=1733259116~hmac=2ce1d3520e5eb3984da180832ab42bede223eb4362f02646744ce81cfb900870&w=1380')] bg-cover bg-center h-[500px] md:h-[600px]">
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>

          <div className="hero-content flex flex-col-reverse lg:flex-row-reverse relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            
            <img
              src={banner}
              className="w-[70%] sm:w-[60%] lg:max-w-sm rounded-lg shadow-2xl mx-auto lg:mx-0 mb-6 lg:mb-0 lg:animate-fade-in"
              alt="Sports Banner"
            />

 
            <div className="text-center lg:text-left">
            
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#9fef15] leading-tight drop-shadow-md">
                Gear Up for Victory!
              </h1>

    
              <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg text-[white] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discover top-quality sports equipment and apparel for every
                athlete. From the field to the court, we have what you need to
                elevate your game.
              </p>

    
              <button className="btn bg-lime-400 hover:bg-lime-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div> */
}
