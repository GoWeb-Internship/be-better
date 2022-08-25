import React from 'react';

import { Swiper } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { slider } from './Slider.module.css';

const Slider = ({ children, slidesPerView }) => {
  return (
    <div className="relative">
      <Swiper
        className={slider}
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
