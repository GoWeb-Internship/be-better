import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import {
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
import HeroBackground from './HeroBackground';
import Form from '../Form';
import Section from '../reusableComponents/Section';
import Social from '../Social';
import Container from '../Container';
import WithDiscount from '../reusableComponents/WithDiscount';

const Hero = () => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });

  return (
    <Section id="home">
      <div className={heroContainer}>
        <HeroBackground />
        <Container>
          <div className={desktopBg}>
            <StaticImage
              layout="fullWidth"
              src="../../images/background/heroDesktop.jpg"
              alt="background on desktop"
              style={{ position: 'absolute' }}
              className={desktopBgImg}
            />
          </div>
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
            <p className={ifyou}>
              {hero.if}
              {hero.emo} <br />
              {hero.yourLife} {hero.pleasure}
            </p>
          </div>
          <div className={heroForm}>
            <Form clickFrom="hero" formClassname={formMargins}/>
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
