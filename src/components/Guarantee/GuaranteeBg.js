import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import icons from '../../images/sprite.svg';

const GuaranteeBg = () => {
  return (
    <div>
      <svg className="hidden laptop:block absolute -z-10 top-[166px] left-[268px] w-[136px]">
        <use href={`${icons}#quote-left`} />
      </svg>
      <div className="block laptop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/guaranteeMobile.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="w-[219px] h-[325px] -z-10 top-[90px] right-5"
          formats={['auto', 'webp', 'avif']}
        />
        <StaticImage
          layout="fullWidth"
          src="../../images/background/white1GuaranteeMobile.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-[219px] h-[325px] -z-10 top-[90px] right-5"
          formats={['auto', 'webp', 'avif']}
        />
        <StaticImage
          layout="fullWidth"
          src="../../images/background/white2GuaranteeMobile.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-[219px] h-[325px] -z-10 top-[90px] right-5"
          formats={['auto', 'webp', 'avif']}
        />
      </div>
      <div className="hidden desktop:block">
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
    </div>
  );
};

export default GuaranteeBg;
