import React, { useState } from 'react';
import HeroBackground from './HeroBackground';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import Form from '../Form';
import Section from '../reusableComponents/Section';
import Social from '../Social';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '../Container';
import FormWithBackground from '../Form/FormWithBackground';
import Button from '../reusableComponents/Button';
import FormInModal from '../Form/FormInModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
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

  const openForm = () => {
    setShowModal(true);
  };
  const closeForm = () => {
    setShowModal(false);
  };

  return (
    <Section id="home">
      <div className="relative h-[532px] laptop:h-[1133px] desktop:h-[780px]">
        <HeroBackground />
        <Container>
          <div className="hidden desktop:block w-[1440px] h-[780px] -z-10 absolute">
            <StaticImage
              layout="fullWidth"
              src="../../images/background/heroDesktop.png"
              alt=""
              style={{ position: 'absolute' }}
              className="w-1036 h-full -z-10 top-0 right-0"
            />
          </div>
          <div className="flex justify-between desktop:flex-row-reverse desktop:justify-end mb-[150px] pt-[100px] laptop:pt-[200px] laptop:px-16 laptop:mb-50 text-left desktop:items-start desktop:pt-30 desktop:px-20 desktop:mb-0">
            <p className="hidden desktop:block ml-auto font-caveat text-white text-28">
              {hero.if}
              {hero.emo} <br />
              {hero.yourLife} {hero.pleasure}
            </p>
            <div className="pl-5 desktop:pl-0">
              <p className="text-xl text-white font-caveat laptop:text-32 desktop:text-black">
                {hero.teach}
              </p>
              <h1 className="font-medium text-white desktop:text-black text-xl laptop:font-normal laptop:text-5xl laptop:leading-[65px]">
                {hero.life}
                <br />
                <span className="font-semibold text-white desktop:text-black text-2xl laptop:font-light laptop:text-59">
                  {hero.kaif}
                </span>
              </h1>
              <p className="text-xl text-white desktop:text-black font-caveat desktop:mb-5 laptop:text-32">
                {hero.emotion} <br />
                {hero.burn}
              </p>
            </div>
            <div className="pr-[30px] desktop:mr-[172px]">
              <Social classNameList="space-y-2 laptop:space-y-4 desktop:space-y-8" />
            </div>
          </div>
          <div className="laptop:hidden">
            <Button
              type="button"
              className="h-12 w-[280px] text-white rounded-full !bg-buttonMobile mb-4"
              doAction={openForm}
            >
              {button}
            </Button>
          </div>
          <div className="hidden laptop:block laptop:pl-16 desktop:pl-80 text-left">
            <Form
              clickFrom="hero"
              formClassname="laptop:mr-auto laptop:mb-13 desktop:mb-2"
            />
          </div>
          <p className="px-5 font-caveat text-orangeDark text-lg leading-[18px] laptop:w-81 laptop:leading-[23px] laptop:ml-16 laptop:p-0 laptop:text-black desktop:ml-80 text-left">
            {data[`${i18n.language}First`]}{' '}
            <span className="text-black laptop:text-orangeDark laptop:font-medium desktop:text-mainSecond">
              {data[`${i18n.language}Discount`]}
            </span>{' '}
            {data[`${i18n.language}Second`]}
          </p>
        </Container>
      </div>
      <FormWithBackground clickFrom="hero" />
      {showModal && <FormInModal hideModal={closeForm} currentPlace="hero" />}
    </Section>
  );
};

export default Hero;
