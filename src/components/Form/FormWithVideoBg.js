import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusableComponents/Section';
import Container from '../Container';
import Video from '../Video';
import Form from './Form';
import Social from '../Social';
import FormWithBackground from '../Form/FormWithBackground';

const FormWithVideoBg = ({ clickFrom }) => {
  const { t, i18n } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  const isMobile = useMedia('(max-width:767px');
  const isDesktop = useMedia('(min-width:1440px');
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
    <Section>
    {isMobile ? <FormWithBackground clickFrom="main" /> : 
    <div
      className="hidden laptop:block laptop:h-[1053px] desktop:h-[760px] desktop:pr-6"
      
    >
      {isDesktop ? <Video /> : <StaticImage
          layout="fullWidth"
          src="../../images/background/formTablet.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />}
      <Container>
        <div className="laptop:px-16 laptop:pt-40 desktop:pr-6 flex justify-end ">
          <div className="text-left ">
            <div className="w-81  ">
              <p className="mb-10 laptop:text-white laptop:mb-50 desktop:text-black desktop:mb-10 text-34 font-semibold">
                {hero.if}
                <br />
                <span className="text-32 laptop:text-white desktop:text-black font-caveat font-normal">
                  {hero.emo}
                </span>
                <br />
                {hero.yourLife}
                <br /> {hero.pleasure}
              </p>
              <Form
                clickFrom={clickFrom}
                formClassname="laptop:mb-[120px] desktop:!m-0 desktop:!mr-auto desktop:!mb-6"
                checkboxClassname="mb-8"
              />
              <p className="font-caveat text-black text-lg leading-[23px] text-left">
                {data[`${i18n.language}First`]}{' '}
                <span className="text-mainSecond font-medium ">
                  {' '}
                  {data[`${i18n.language}Discount`]}
                </span>{' '}
                {data[`${i18n.language}Second`]}
              </p>
            </div>
          </div>
          <div className="ml-[213px]">
            <Social classNameList="space-y-4 desktop:space-y-8" />
          </div>
        </div>
      </Container>
    </div>}
    </Section>
  );
};

export default FormWithVideoBg;
