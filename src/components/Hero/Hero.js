import React from 'react';
import HeroBackground from './HeroBackground';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Form from '../Form';
import Section from '../reusableComponents/Section';
import Social from '../Social';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '../Container';
import FormWithBackground from '../Form/FormWithBackground';
import Button from '../reusableComponents/Button';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { button } = t('form', { returnObjects: true });

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
  const hero = t('hero', { returnObjects: true });
  const data = frontmatter.frontmatter;

  return (
    <Section id="home">
      <div className="relative h-[532px] laptop:h-[1053px] desktop:h-[700px]">
        <HeroBackground />
        <Container>
          <div className="flex justify-between mb-[150px] pt-[100px] text-left desktop:items-start desktop:pt-10 desktop:px-20 desktop:h-[700px]">
            <div className=" pl-5">
              <p className="text-xl text-white font-caveat desktop:text-32">
                {hero.teach}
              </p>
              <h1 className="font-medium text-white desktop:text-black text-xl desktop:font-normal desktop:text-5xl desktop:leading-[65px]">
                {hero.life}
                <br />
                <span className="font-semibold text-white desktop:text-black text-2xl desktop:font-light desktop:text-59">
                  {hero.kaif}
                </span>
              </h1>
              <p className="text-xl text-white desktop:text-black font-caveat desktop:mb-5 desktop:text-32">
                {hero.emotion} <br />
                {hero.burn}
              </p>
            </div>
            <div className="pr-[30px] desktop:mr-[172px]">
              <Social />
            </div>
          </div>
          <Button
            type="button"
            className="h-12 w-[280px] text-white rounded-full !bg-buttonMobile mb-4"
          >
            {button}
          </Button>
          <div className="hidden laptop:block text-left">
            <Form
              clickFrom="hero"
              formClassname="desktop:!m-0 desktop:!mr-auto desktop:!mb-2"
            />
          </div>
          <p className="px-5 font-caveat text-orangeDark text-lg leading-[18px] text-left">
            {data[`${i18n.language}First`]}{' '}
            <span className="text-black desktop:text-mainSecond">
              {' '}
              {data[`${i18n.language}Discount`]}
            </span>{' '}
            {data[`${i18n.language}Second`]}
          </p>
        </Container>
      </div>
      <FormWithBackground clickFrom="hero" />
      {/* Desktop version */}
      {/* <div className="relative flex items-start pt-10 px-20 h-[700px]">

        </div>
        <p className="ml-auto text-28 font-caveat text-white text-left">
          {hero.if}
          {hero.emo} <br />
          {hero.yourLife} {hero.pleasure}
        </p>
      </div> */}
    </Section>
  );
};

export default Hero;
