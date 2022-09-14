import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { heroBg } from './Hero.module.css';

import heroMobile from 'images/background/heroMobile.jpg';
import heroTablet from 'images/background/heroTablet.jpg';

const HeroBackground = () => {
  return (
    <>
      <div className="laptop:hidden">
        <StaticImage
          layout="fullWidth"
          src={heroMobile}
          alt="mobile background"
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      </div>
      <div className="hidden laptop:block desktop:hidden">
        <StaticImage
          layout="fullWidth"
          src={heroTablet}
          alt="tablet background"
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      </div>
    </>
  );
};

export default HeroBackground;
