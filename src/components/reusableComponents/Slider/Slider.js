import React from 'react';
import { useMedia } from 'react-use';
import { Swiper } from 'swiper/react';
import { Navigation, EffectFade, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Slider = ({ children, slidesPerView, className = '' }) => {
  const isMobile = useMedia('(min-width:1440px');

  return (
    <div className="relative">
      <Swiper
        className={`mx-auto ${className}`}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        spaceBetween={16}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={slidesPerView}
        modules={[Navigation, EffectFade, Pagination]}
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
