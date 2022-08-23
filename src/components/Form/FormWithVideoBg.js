import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../reusableComponents/Section';
import Video from '../Video';
import Form from './Form';
import Social from '../Social';

const FormWithVideoBg = ({ clickFrom }) => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  return (
    <Section className="flex justify-end h-[760px] pr-6" id="nav-feedback">
      <Video />
      <div className="text-left pt-20 ">
        <div className="w-81 text-black">
          <p className="mb-10 text-34 font-semibold">
            {hero.if}
            <br />
            <span className="text-32 font-caveat font-normal">{hero.emo}</span>
            <br />
            {hero.yourLife}
            <br /> {hero.pleasure}
          </p>
          <Form
            clickFrom={clickFrom}
            formClassname="desktop:!m-0 desktop:!mr-auto desktop:!mb-6"
          />
          <p className="font-caveat text-black text-lg leading-[23px] text-left">
            {hero.note}
          </p>
        </div>
      </div>
      <div className="ml-[213px] pt-20 ">
        <Social />
      </div>
    </Section>
  );
};

export default FormWithVideoBg;
