import React from 'react';
import { useMedia } from 'react-use';
import { Swiper } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { slider } from './Slider.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Slider = ({ children, slidesPerView }) => {
  const isMobile = useMedia('(min-width:1440px');

  return (
    <div className="relative">
      <Swiper
        className={slider}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        spaceBetween={16}
        loop={true}
        slidesPerView={slidesPerView}
        modules={[Navigation, EffectFade]}
      >
        {children}
      </Swiper>

      {isMobile && (
        <>
          <div className="prev-slider swiper-button-disabled" role={'button'}>
            <BsChevronLeft size={48} />
          </div>
          <div className="next-slider swiper-button-disabled" role={'button'}>
            <BsChevronRight size={48} />
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
