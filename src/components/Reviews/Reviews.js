import React from 'react';
import { useMedia } from 'react-use';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import Slider from '../reusableComponents/Slider';
import { graphql, useStaticQuery } from 'gatsby';
import { title } from './Reviews.module.css';
import { CgQuote } from 'react-icons/cg';
import Review from './Review';

const Reviews = () => {
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
  const isWide = useMedia('(min-width:1440px');
  const clients = allMarkdownRemark.nodes;
  const slides = isWide ? 3 : 2;

  const reviews = t('reviews', { returnObjects: true });
  return (
    <Section
      id="nav-reviews"
      className="px-5 mt-[73px] laptop:mt-[324px] desktop:mt-[181px] pb-[83px] laptop:pb-[131px] desktop:pb-[142px]"
    >
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

      {isWide && (
        <CgQuote
          className="text-mainSecond absolute right-[100px] bottom-[50px]"
          size={120}
        />
      )}
    </Section>
  );
};

export default Reviews;
