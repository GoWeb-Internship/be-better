import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../reusableComponents/Slider';
import Review from './Review';

import { sliderRev } from './Reviews.module.css';

const ReviewsList = ({ slidesPerView, reviewsData }) => {
  return (
    <Slider slidesPerView={slidesPerView} className={sliderRev}>
      {!!reviewsData.length &&
        reviewsData.map(({ frontmatter }, id) => {
          return (
            <SwiperSlide key={id} className="slide h-auto slider-item-width ">
              <Review frontmatter={frontmatter} />
            </SwiperSlide>
          );
        })}
    </Slider>
  );
};

export default ReviewsList;
