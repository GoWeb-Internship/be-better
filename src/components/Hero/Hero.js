import React, { useState } from 'react';
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
  mobileBtn,
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
import FormWithBackground from '../Form/FormWithBackground';
import Button from '../reusableComponents/Button';
import FormInModal from '../Form/FormInModal';
import WithDiscount from '../reusableComponents/WithDiscount';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const { button } = t('form', { returnObjects: true });
  const hero = t('hero', { returnObjects: true });

  const openForm = () => {
    setShowModal(true);
  };
  const closeForm = () => {
    setShowModal(false);
  };

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
            <p className={ifyou}>
              {hero.if}
              {hero.emo} <br />
              {hero.yourLife} {hero.pleasure}
            </p>
            <div className="pl-5 desktop:pl-0">
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
            <div className="pr-[30px] desktop:mr-[172px]">
              <Social classNameList="space-y-2 desktop:space-y-8" />
            </div>
          </div>
          <div className="laptop:hidden">
            <Button type="button" className={mobileBtn} doAction={openForm}>
              {button}
            </Button>
          </div>
          <div className={heroForm}>
            <Form
              clickFrom="hero"
              formClassname={formMargins}
            />
          </div>
          <WithDiscount classnameText={discountText} classnameDiscount={discount}/>
        </Container>
      </div>
      <FormWithBackground clickFrom="hero-m" />
      {showModal && <FormInModal hideModal={closeForm} currentPlace="hero" />}
    </Section>
  );
};

export default Hero;
