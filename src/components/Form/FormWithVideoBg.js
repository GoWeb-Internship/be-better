import React from 'react';
import Form from './Form';
import { TiSocialFacebook } from 'react-icons/ti';
import { TbBrandInstagram } from 'react-icons/tb';
import { TiSocialLinkedin } from 'react-icons/ti';
import Video from '../Video';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const FormWithVideoBg = ({ clickFrom }) => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  return (
    <section
      className="relative flex justify-end h-[760px] pr-6"
      id="nav-feedback"
    >
      <Video />
      <div className="text-left pt-20 ">
        <div className="w-81 text-black">
          <p className="mb-10 text-34 font-semibold">
            {hero.if}
            <br />
            <span className="text-32 font-caveat font-normal">{hero.emo}</span>
            <br />
            {hero.pleasure}
            <br /> {hero.yourLife}
          </p>
          <Form
            clickFrom={clickFrom}
            formClassname="desktop:!m-0 desktop:!mr-auto desktop:!mb-6"
          />
          <p className="w-[426px] font-caveat text-black text-lg leading-[23px] text-left">
            {hero.note}
          </p>
        </div>
      </div>
      <ul className="flex flex-col space-y-8 ml-[213px] pt-20 ">
        <li className="flex justify-center items-center w-11 h-11 bg-main text-white border border-main rounded-2xl hover:bg-white hover:text-main transition">
          <a
            href="https://instagram.com/yuliya_shayenko?igshid=YmMyMTA2M2Y="
            target="blank"
            rel="noreferrer noopener"
          >
            <TbBrandInstagram className="w-6 h-6  fill-inherit" />
          </a>
        </li>
        <li className="flex justify-center items-center w-11 h-11 bg-main text-white border border-main rounded-2xl hover:bg-white hover:text-main transition">
          <a
            href="https://www.facebook.com/Yuliya.Shayenko"
            target="blank"
            rel="noreferrer noopener"
          >
            <TiSocialFacebook className="w-6 h-6  fill-inherit" />
          </a>
        </li>
        <li className="flex justify-center items-center w-11 h-11 bg-main text-white border border-main rounded-2xl hover:bg-white hover:text-main transition">
          <a
            href="https://www.linkedin.com/in/yshayenko/"
            target="blank"
            rel="noreferrer noopener"
          >
            <TiSocialLinkedin className="w-6 h-6 fill-inherit " />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default FormWithVideoBg;
