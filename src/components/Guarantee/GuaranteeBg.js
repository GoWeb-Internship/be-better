import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {icon, photoMobile, photoTablet, photoDesktop} from './Guarantee.module.css';
import icons from '../../images/sprite.svg';

const GuaranteeBg = () => {
  return (
    <div>
      <svg className={icon}>
        <use href={`${icons}#quote-left`} />
      </svg>
      <div className="laptop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/guaranteeMobile.jpg"
          alt="author with car small"
          style={{ position: 'absolute' }}
          className={photoMobile}
          formats={['auto', 'webp', 'avif']}
        />
      </div>
      <div className="hidden laptop:block desktop:hidden">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/guaranteeTablet.jpg"
          alt="author with car middle"
          style={{ position: 'absolute' }}
          className={photoTablet}
          formats={['auto', 'webp', 'avif']}
        />
      </div>
      <div className="hidden desktop:block">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/guaranteeDesktop.jpg"
          alt="author with car big"
          style={{ position: 'absolute' }}
          className={photoDesktop}
          formats={['auto', 'webp', 'avif']}
        />
      </div>
    </div>
  );
};

export default GuaranteeBg;
