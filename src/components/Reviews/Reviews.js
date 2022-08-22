import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import Slider from '../reusableComponents/Slider';
import { graphql, useStaticQuery } from 'gatsby';
import { BsPerson } from 'react-icons/bs';
import { CgQuote } from 'react-icons/cg';

const Reviews = () => {
  const { t, i18n } = useTranslation();
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
    <Section id="nav-reviews" className="mt-[181px]">
      <h3 className="title-primary text-orangeDark px-5 mb-6 laptop:mb-[58px] laptop:px-15 laptop:text-34 desktop:mb-11">
        {reviews.title}
      </h3>
      <CgQuote className="text-mainSecond w-16 h-16  absolute top-[5%] left-[5%] " />
      <Slider slidesPerView={3}>
        {!!clients.length &&
          clients.map(({ frontmatter }, id) => {
            return (
              <SwiperSlide key={id}>
                <div className="flex flex-col justify-between w-80 h-[360px] text-left px-8 pb-8 pt-10 bg-white rounded-2xl shadow-you">
                  <div>
                    <p>{frontmatter[`${i18n.language}Text`]}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full mr-6 ">
                      <BsPerson size={24} />
                    </div>
                    <div>
                      <p className="text-xl font-bold">
                        {frontmatter[`${i18n.language}Name`]}
                      </p>
                      <p>{frontmatter[`${i18n.language}Position`]}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Slider>
      <CgQuote className="text-mainSecond w-16 h-16 absolute right-10% -bottom-10%" />
    </Section>
  );
};

export default Reviews;
