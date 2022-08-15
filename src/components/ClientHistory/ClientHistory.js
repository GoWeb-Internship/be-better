import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { rightIcon, leftIcon } from './ClienHistory.module.css';

const ClientHistory = () => {
  const { t } = useTranslation();
  const data = t('clientHistory', { returnObjects: true });

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <MdArrowForwardIos className={rightIcon} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <MdArrowBackIos className={leftIcon} />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <Slider {...settings}>
      {data.map(({ name, prof, quote }) => (
        <div>
          <div className="flex">
            <div>
              <p>{name}</p>
              <p>{prof}</p>
            </div>
            <p>{quote}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ClientHistory;
