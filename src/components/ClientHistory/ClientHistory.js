import React, { useState, useEffect } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusableComponents/Section';
import { SwiperSlide } from 'swiper/react';
import Slider from '../reusableComponents/Slider';
import {
  title,
  name,
  profession,
  sliderHistory,
  slide,
  icon,
  client,
} from './ClientHistory.module.css';
import { FaQuoteLeft } from 'react-icons/fa';
import Heading from '../reusableComponents/Heading';
import { useMedia } from 'react-use';

const ClientHistory = () => {
  const [size, setSize] = useState(120);

  const isMobile = useMedia('(max-width:767px)');

  const isDesktop = useMedia('(min-width:1440px)');

  useEffect(() => {
    if (isMobile) {
      setSize(55);
    } else if (isDesktop) {
      setSize(120);
    } else {
      setSize(64);
    }
  }, [isMobile, isDesktop, size]);

  const { t, i18n } = useTranslation();

  const data = t('clientHistory', { returnObjects: true });

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/clientHistory/" } }
      ) {
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

  return (
    <Section
      className="py-8 laptop:pt-20 laptop:pb-[50px] desktop:pb-[77px]"
      id="client"
    >
      <Heading tag="h2" className={title} text={data.title} />

      <Slider slidesPerView={1} className={sliderHistory}>
        {!!clients.length &&
          clients.map(({ frontmatter }, id) => {
            return (
              <SwiperSlide key={id}>
                <div className={slide}>
                  <div className="w-[173px]">
                    <p className={name}>
                      {frontmatter[`${i18n.language}Name`]}
                    </p>
                    <p className={profession}>
                      {frontmatter[`${i18n.language}Position`]}
                    </p>
                  </div>
                  <div className={client}>
                    <p>{frontmatter[`${i18n.language}Text`]}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Slider>
      <div className={icon}>
        <FaQuoteLeft size={size} />
      </div>
    </Section>
  );
};

export default ClientHistory;
