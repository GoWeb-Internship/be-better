import React, { useState, useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import Slider from '../reusableComponents/Slider';
import { graphql, useStaticQuery } from 'gatsby';
import { title } from './Reviews.module.css';
import { CgQuote } from 'react-icons/cg';
import Review from './Review';

const Reviews = () => {
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setSlides(2);
    } else {
      setSlides(3);
    }
  }, []);

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

  const reviews = t('reviews', { returnObjects: true });
  return (
    <Section id="nav-reviews" className="mt-[181px] pb-[142px]">
      <h3 className={title}>{reviews.title}</h3>

      <CgQuote
        className="text-mainSecond   absolute top-0 left-[60px] "
        size={120}
      />

      <Slider slidesPerView={slides}>
        {!!clients.length &&
          clients.map(({ frontmatter }, id) => {
            return (
              <SwiperSlide key={id} className="slide h-auto  slider-item-width">
                <Review frontmatter={frontmatter} />
              </SwiperSlide>
            );
          })}
      </Slider>

      <CgQuote
        className="text-mainSecond absolute right-[100px] bottom-[50px]"
        size={120}
      />
    </Section>
  );
};

export default Reviews;
