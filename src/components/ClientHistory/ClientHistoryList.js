import React from 'react';
import { SwiperSlide } from 'swiper/react';

import Slider from 'components/reusableComponents/Slider';
import ClientHistoryItem from './ClientHistoryItem';

import { sliderHistory } from './ClientHistory.module.css';

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
