import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { heroBg } from './Hero.module.css';

const HeroBackground = () => {
  return (
    <>
      <div className="laptop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroMobile.jpg"
          alt="mobile background"
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      </div>
      <div className="hidden laptop:block desktop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroTablet.jpg"
          alt="tablet background"
          style={{ position: 'absolute' }}
          className={heroBg}
        />
      </div>
    </>
  );
};

export default HeroBackground;
