import React from 'react';
import Form from './Form';
import { StaticImage } from 'gatsby-plugin-image';

const FormWithBackground = () => {
  return (
    <div className="relative h-[568px]">
      {/* <StaticImage
        src="../../images/background/formMobile.png"
        className="absolute w-full top-0 left-0 z-0"
      /> */}
      <StaticImage
        layout="fullWidth"
        src="../../images/background/formMobile.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <p className="mb-[176px] px-8 pt-[60px] font-caveat text-orangeDark text-2xl">
        Если ты эмоционально выгорел и живешь без удовольствия
      </p>
      <Form clickFrom="hero" />
    </div>
  );
};

export default FormWithBackground;
