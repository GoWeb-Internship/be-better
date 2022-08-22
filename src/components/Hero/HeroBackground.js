import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HeroBackground = () => {
  return (
    <div>
      <StaticImage
        layout="fullWidth"
        src="../../images/background/heroDesktop.png"
        alt=""
        style={{ position: 'absolute' }}
        className="w-1036 h-full -z-10 top-0 right-0"
      />
    </div>
  );
};

export default HeroBackground;
