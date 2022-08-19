import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { TiSocialFacebook } from 'react-icons/ti';
import { TbBrandInstagram } from 'react-icons/tb';
import { TiSocialLinkedin } from 'react-icons/ti';
// import FormWithBackground from '../Form/FormWithBackground';
import Button from '../reusableComponents/Button';

const Hero = () => {
  const { t } = useTranslation();
  const data = t('form', { returnObjects: true });

  return (
    <section className="">
      {/* Mobile version */}
      <div className="relative h-[532px]">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroMobile.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />
        <StaticImage
          layout="fullWidth"
          src="../../images/background/darkGradient.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />{' '}
        <StaticImage
          layout="fullWidth"
          src="../../images/background/lightGradient.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />
        <div className="flex justify-between mb-[150px] pt-[100px] text-left">
          <div className=" pl-5 text-white">
            <p className="text-xl font-caveat">Научу</p>
            <h1 className="font-medium text-xl">
              жить и работать
              <br />
              <span className="font-semibold text-2xl">в кайф</span>
            </h1>
            <p className="text-xl font-caveat">
              без эмоциональных <br />
              выгораний
            </p>
          </div>
          <div className="flex flex-col justify-evenly pr-[30px]">
            <a
              href="https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y="
              target="blank"
              rel="noreferrer noopener"
            >
              <TbBrandInstagram className="w-6 h-6  text-white rounded-lg" />
            </a>
            <a
              href="https://www.facebook.com/Yuliya.Shayenko"
              target="blank"
              rel="noreferrer noopener"
            >
              <TiSocialFacebook className="w-6 h-6  text-white rounded-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/yshayenko/"
              target="blank"
              rel="noreferrer noopener"
            >
              <TiSocialLinkedin className="w-6 h-6  text-white rounded-lg" />
            </a>
          </div>
        </div>
        <Button
          type="button"
          className="h-12 w-[280px] rounded-full !bg-buttonMobile mb-6"
        >
          {data.button}
        </Button>
        <p className="px-5 font-caveat text-orangeDark text-lg leading-[18px] text-center">
          Записывайся сегодня ко мне на первую коуч-сессию и начни уже завтра
          жить в кайф!
        </p>
      </div>
      {/* <FormWithBackground clickFrom="hero" /> */}
      {/* Desktop version */}
      <div className="relative h-[532px]">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/heroMobile.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />
        <StaticImage
          layout="fullWidth"
          src="../../images/background/darkGradient.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />{' '}
        <StaticImage
          layout="fullWidth"
          src="../../images/background/lightGradient.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-full h-full -z-10 top-0"
        />
        <div className="flex justify-between mb-[150px] pt-[100px] text-left">
          <div className=" pl-5 text-white">
            <p className="text-xl font-caveat">Научу</p>
            <h1 className="font-medium text-xl">
              жить и работать
              <br />
              <span className="font-semibold text-2xl">в кайф</span>
            </h1>
            <p className="text-xl font-caveat">
              без эмоциональных <br />
              выгораний
            </p>
          </div>
          <div className="flex flex-col justify-evenly pr-[30px]">
            <a
              href="https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y="
              target="blank"
              rel="noreferrer noopener"
            >
              <TbBrandInstagram className="w-6 h-6  text-white rounded-lg" />
            </a>
            <a
              href="https://www.facebook.com/Yuliya.Shayenko"
              target="blank"
              rel="noreferrer noopener"
            >
              <TiSocialFacebook className="w-6 h-6  text-white rounded-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/yshayenko/"
              target="blank"
              rel="noreferrer noopener"
            >
              <TiSocialLinkedin className="w-6 h-6  text-white rounded-lg" />
            </a>
          </div>
        </div>
        <p className="px-5 font-caveat text-orangeDark text-lg leading-[18px] text-center">
          Записывайся сегодня ко мне на первую коуч-сессию и начни уже завтра
          жить в кайф!
        </p>
      </div>
    </section>
  );
};

export default Hero;
