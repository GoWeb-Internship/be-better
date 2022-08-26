import React, { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import Slider from '../reusableComponents/Slider';
import { graphql, useStaticQuery } from 'gatsby';
import { title, sliderRev } from './Reviews.module.css';
import { CgQuote } from 'react-icons/cg';
import Review from './Review';

const Reviews = () => {
  const [slide, setSlide] = useState(3);

  const { t } = useTranslation();
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/reviews/" } }) {
        nodes {
          frontmatter {
            ukName
            ukPosition
            ukText
            enName
            enPosition
            enText
            ruName
            ruPosition
            ruText
          }
          id
        }
      }
    }
  `);
  const clients = allMarkdownRemark.nodes;

  const isMobile = useMedia('(max-width:767px)');

  const isDesktop = useMedia('(min-width:1440px)');

  useEffect(() => {
    if (isMobile) {
      setSlide(1);
    } else if (isDesktop) {
      setSlide(3);
    } else {
      setSlide(2);
    }
  }, [isMobile, isDesktop, slide]);

  const reviews = t('reviews', { returnObjects: true });

  return (
    <Section
      id="nav-reviews"
      className="px-5 mt-[73px] laptop:mt-[324px] desktop:mt-[181px] pb-[83px] laptop:pb-[131px] desktop:pb-[142px]"
    >
      <h3 className={title}>{reviews.title}</h3>

      <CgQuote
        className="text-mainSecond absolute top-0 -left-[15px] desktop:left-[60px] "
        size={120}
      />

      <Slider slidesPerView={slide} className={sliderRev}>
        {!!clients.length &&
          clients.map(({ frontmatter }, id) => {
            return (
              <SwiperSlide
                key={id}
                className="slide h-auto  slider-item-width "
              >
                <Review frontmatter={frontmatter} />
              </SwiperSlide>
            );
          })}
      </Slider>

      {!isMobile && (
        <CgQuote
          className="text-mainSecond absolute right-[100px] bottom-[50px]"
          size={120}
        />
      )}
    </Section>
  );
};

export default Reviews;
