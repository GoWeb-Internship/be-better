import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { heroBg } from './Hero.module.css';

const HeroBackground = () => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  return (
    <>
      <div className="laptop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroMobile.jpg"
          alt={hero.background}
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      </div>
      <div className="hidden laptop:block desktop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroTablet.jpg"
          alt={hero.background}
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      </div>
    </>
  );
};

export default HeroBackground;
