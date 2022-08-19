import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HeroBackground = () => {
  return (
    <div>
      <div className="absolute w-[404px] h-full top-0 left-0 -z-10 bg-white"></div>
      <StaticImage
        layout="fullWidth"
        src="../../images/background/heroDesktop.png"
        alt=""
        style={{ position: 'absolute' }}
        className="w-[1036px] h-full -z-10 top-0 right-0"
      />
      <StaticImage
        layout="fullWidth"
        src="../../images/background/whiteDesktop.png"
        alt=""
        style={{ position: 'absolute' }}
        className="w-[1036px] h-full -z-10 top-0"
      />
    </div>
  );
};

export default HeroBackground;
