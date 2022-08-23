import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import Video from '../Video';
import Form from './Form';
import Social from '../Social';
import { graphql, useStaticQuery } from 'gatsby';

const FormWithVideoBg = ({ clickFrom }) => {
  const { t, i18n } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/discount/" } }) {
        nodes {
          frontmatter {
            ukFirst
            ukDiscount
            ukSecond
            enFirst
            enDiscount
            enSecond
            ruFirst
            ruDiscount
            ruSecond
          }
          id
        }
      }
    }
  `);
  const [frontmatter] = allMarkdownRemark.nodes;
  const data = frontmatter.frontmatter;
  return (
    <Section className="flex justify-end h-[760px] pr-6" id="nav-feedback">
      <Video />
      <div className="text-left pt-20 ">
        <div className="w-81 text-black">
          <p className="mb-10 text-34 font-semibold">
            {hero.if}
            <br />
            <span className="text-32 font-caveat font-normal">{hero.emo}</span>
            <br />
            {hero.yourLife}
            <br /> {hero.pleasure}
          </p>
          <Form
            clickFrom={clickFrom}
            formClassname="desktop:!m-0 desktop:!mr-auto desktop:!mb-6"
          />
          <p className="w-[426px] font-caveat text-black text-lg leading-[23px] text-left">
            {data[`${i18n.language}First`]}{' '}
            <span className="text-mainSecond ">
              {' '}
              {data[`${i18n.language}Discount`]}
            </span>{' '}
            {data[`${i18n.language}Second`]}
          </p>
        </div>
      </div>
      <div className="ml-[213px] pt-20 ">
        <Social />
      </div>
    </Section>
  );
};

export default FormWithVideoBg;
