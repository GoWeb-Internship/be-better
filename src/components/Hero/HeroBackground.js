import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import useMediaRules from 'helpers/getMedia';
import { heroBg } from './Hero.module.css';

const HeroBackground = () => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  const media = useMediaRules();

  return (
    <>
      <div className="tablet:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroMobile.jpg"
          alt={hero.background}
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      </div>
      <div className="hidden tablet:block desktop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroMobile.jpg"
          alt={hero.background}
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      </div>
      {/* {media === 'mobile' && (
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroMobile.jpg"
          alt={hero.background}
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      )}
      {media === 'tablet' && (
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroTablet.jpg"
          alt={hero.background}
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      )} */}
    </>
  );
};

export default HeroBackground;
