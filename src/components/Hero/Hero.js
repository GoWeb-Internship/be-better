import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from 'components/reusableComponents/Section';
import Container from 'components/Container';
import HeroBackground from './HeroBackground';
import Form from 'components/Form';
import Social from 'components/Social';
import WithDiscount from 'components/reusableComponents/WithDiscount';
import useMediaRules from 'helpers/getMedia';

import {
  background,
  heroContainer,
  desktopBg,
  desktopBgImg,
  content,
  ifyou,
  titleCaveat,
  title,
  titleBig,
  heroForm,
  formMargins,
  discountText,
  discount,
} from './Hero.module.css';

const Hero = () => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  const media = useMediaRules();

  return (
    <Section id="home" backgroundClass={background}>
      <div className={heroContainer}>
        <HeroBackground />
        <Container>
          {media === 'desktop' && (
            <div className={desktopBg}>
              <StaticImage
                layout="fullWidth"
                src="../../images/background/heroDesktop.jpg"
                alt={hero.background}
                style={{ position: 'absolute' }}
                className={desktopBgImg}
              />
            </div>
          )}

          <div className={content}>
            <div className="mr-[30px] laptop:mr-0 desktop:mr-[172px]">
              <Social classNameList="space-y-2 laptop:space-y-8" />
            </div>
            <div className="laptop:pl-5 desktop:pl-0">
              <p className={titleCaveat}>{hero.teach}</p>
              <h1 className={title}>
                {hero.life}
                <br />
                <span className={titleBig}>{hero.kaif}</span>
              </h1>
              <p className={`${titleCaveat} desktop:mb-5`}>
                {hero.emotion} <br />
                {hero.burn}
              </p>
            </div>
            {media === 'desktop' && (
              <p className={ifyou}>
                {hero.if}
                {hero.emo} <br />
                {hero.yourLife} {hero.pleasure}
              </p>
            )}
          </div>
          <div className={heroForm}>
            <Form clickFrom="hero" formClassname={formMargins} />
          </div>
          <WithDiscount
            classnameText={discountText}
            classnameDiscount={discount}
          />
        </Container>
      </div>
    </Section>
  );
};

export default Hero;
