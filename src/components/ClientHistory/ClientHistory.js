import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { rightIcon, leftIcon } from './ClienHistory.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusableComponents/Section';
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
    <Section>
      <Slider {...settings}>
        {!!clients.length &&
          clients.map(({ frontmatter }, id) => {
            <li key={id}>
              <div>
                <p>{frontmatter[`${i18n.language}Name`]}</p>
                <p>{frontmatter[`${i18n.language}Position`]}</p>
              </div>
              <div>
                <p>{frontmatter[`${i18n.language}Text`]}</p>
              </div>
            </li>;
          })}
      </Slider>
    </Section>
  );
};

export default ClientHistory;
