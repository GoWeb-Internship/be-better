import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import icons from '../../images/sprite.svg';

const GuaranteeBg = () => {
  return (
    <div>
      <svg className="absolute -z-10 w-12 h-[42px] top-[211px] left-5 laptop:top-[166px] laptop:left-16 desktop:left-[268px] laptop:w-[136px] laptop:h-[156px]">
        <use href={`${icons}#quote-left`} />
      </svg>
      <div className="laptop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/guaranteeMobile.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="w-[219px] h-[325px] -z-10 top-[90px] right-5"
          formats={['auto', 'webp', 'avif']}
        />
      </div>
      <div className="hidden laptop:block desktop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/guaranteeTablet.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="w-[594px] h-[510px] -z-10 top-0 right-0"
          formats={['auto', 'webp', 'avif']}
        />
      </div>
      <div className="hidden desktop:block">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/guaranteeDesktop.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="w-1036 h-full -z-10 top-0 right-0"
          formats={['auto', 'webp', 'avif']}
        />
      </div>
    </div>
  );
};

export default GuaranteeBg;
