import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HeroBackground = () => {
  return (
    <>
      <div className="laptop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroMobile.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />
      </div>
      <div className="hidden laptop:block desktop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroTablet.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />
      </div>
      <div className="hidden desktop:block">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroDesktop.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-1036 h-full -z-10 top-0 right-0"
        />
      </div>
    </>
  );
};

export default HeroBackground;
