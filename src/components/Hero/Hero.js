import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { TiSocialFacebook } from 'react-icons/ti';
import { TbBrandInstagram } from 'react-icons/tb';
import { TiSocialLinkedin } from 'react-icons/ti';
import FormWithBackground from '../Form/FormWithBackground';
import Button from '../reusableComponents/Button';

const Hero = () => {
  const { t } = useTranslation();
  const data = t('form', { returnObjects: true });

  return (
    <section className="">
      <div className="relative h-[532px]">
        <StaticImage
          src="../../images/background/heroMobile.png"
          className="absolute w-full top-0 left-0 z-0"
        />
        <StaticImage
          src="../../images/background/darkGradient.png"
          className="absolute w-full top-0 left-0 z-0"
        />
        <StaticImage
          src="../../images/background/lightGradient.png"
          className="absolute w-full top-0 left-0 z-0"
        />
        <div className="relative flex justify-between mb-[150px] pt-[100px] text-left z-10">
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
          <div className="flex flex-col justify-evenly pr-[30px] z-10">
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
          className="relative h-12 w-[280px] rounded-full !bg-buttonMobile mb-6 z-10"
        >
          {data.button}
        </Button>
        <p className="relative px-5 font-caveat text-orangeDark text-lg leading-[18px] text-center z-10">
          Записывайся сегодня ко мне на первую коуч-сессию и начни уже завтра
          жить в кайф!
        </p>
      </div>
      <FormWithBackground />
    </section>
  );
};

export default Hero;
