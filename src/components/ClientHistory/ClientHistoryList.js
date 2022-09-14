import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../reusableComponents/Slider';
import { sliderHistory } from './ClientHistory.module.css';
import ClientHistoryItem from './ClientHistoryItem';

const ClientHistoryList = ({ clients }) => {
  return (
    <Slider slidesPerView={1} className={sliderHistory}>
      {!!clients.length &&
        clients.map(({ frontmatter }, id) => {
          return (
            <SwiperSlide key={id}>
              <ClientHistoryItem itemData={frontmatter} />
            </SwiperSlide>
          );
        })}
    </Slider>
  );
};

export default ClientHistoryList;
