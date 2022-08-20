import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusableComponents/Section';
import { SwiperSlide } from 'swiper/react';
import Slider from '../reusableComponents/Slider';
import { title, name, profession } from './ClientHistory.module.css';
// import Svg from '../../images/quote.svg';
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
    <Section className="py-20 ">
      <h3 className={title}>{data.title}</h3>

      <Slider>
        {!!clients.length &&
          clients.map(({ frontmatter }, id) => {
            return (
              <SwiperSlide key={id}>
                <div className="m-auto px-5 flex flex-col text-left laptop:w-80  desktop:w-[716px] desktop:flex-row">
                  <div>
                    <p className={name}>
                      {frontmatter[`${i18n.language}Name`]}
                    </p>
                    <p className={profession}>
                      {frontmatter[`${i18n.language}Position`]}
                    </p>
                  </div>
                  <div className=" laptop:w-80 desktop:w-[518px] desktop:ml-5 ">
                    <p>{frontmatter[`${i18n.language}Text`]}</p>{' '}
                  </div>
                  {/* <img src={Svg} alt="" /> */}
                </div>
              </SwiperSlide>
            );
          })}
      </Slider>
    </Section>
  );
};

export default ClientHistory;
