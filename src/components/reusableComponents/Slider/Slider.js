import React from 'react';

import { Swiper } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ children, slidesPerView }) => {
  return (
    <div className="relative">
      <Swiper
        className={`mx-auto w-80 laptop:w-[600px]  desktop:w-[1248px]`}
        navigation={true}
        slidesPerView={slidesPerView}
        modules={[Navigation, EffectFade]}
        loop={true}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
