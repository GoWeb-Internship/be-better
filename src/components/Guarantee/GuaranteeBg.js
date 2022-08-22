import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import icons from '../../images/sprite.svg';

const GuaranteeBg = () => {
  return (
    <div>
      <svg className="absolute -z-10 top-[166px] left-[268px] w-[136px]">
        <use href={`${icons}#quote-left`} />
      </svg>
      <StaticImage
        layout="fullWidth"
        src="../../images/background/guaranteeDesktop.png"
        alt=""
        style={{ position: 'absolute' }}
        className="w-1036 h-full -z-10 top-0 right-0"
        formats={['auto', 'webp', 'avif']}
      />
      <StaticImage
        layout="fullWidth"
        src="../../images/background/whiteGuaranteeDesktop.png"
        alt=""
        style={{ position: 'absolute' }}
        className="w-1036 h-full -z-10 top-0 right-0"
        formats={['auto', 'webp', 'avif']}
      />
    </div>
  );
};

export default GuaranteeBg;
