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
            name_uk
            uk_position
            uk_text
            name_en
            en_position
            en_text
            name_ru
            ru_position
            ru_text
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
        {clients.map(({ frontmatter }, id) => {
          <li key={id}>
            <div>
              <p>{frontmatter[`name-${i18n.language}`]}</p>
              <p>{frontmatter[`${i18n.language}-position`]}</p>
            </div>
            <div>
              <p>{frontmatter[`${i18n.language}-text`]}</p>
            </div>
          </li>;
        })}
      </Slider>
      <Slider>
        {data.map(({ name, prof, quote }) => (
          <div key={name}>
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
    </Section>
  );
};

export default ClientHistory;
