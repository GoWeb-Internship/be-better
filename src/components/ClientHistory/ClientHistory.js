import React from 'react';
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

const ClientHistory = () => {
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
    <Section className="py-20" id="client">
      <Heading tag="h2" className={title} text={data.title} />
      {/* <h3 className={title}>{data.title}</h3> */}

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
        <FaQuoteLeft size={120} />
      </div>
    </Section>
  );
};

export default ClientHistory;
