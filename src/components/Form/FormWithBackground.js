import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import Form from './Form';
import Container from '../Container';

const FormWithBackground = ({ clickFrom }) => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  return (
    <div className="relative h-[568px] laptop:hidden">
      <StaticImage
        layout="fullWidth"
        src="../../images/background/formMobile.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <Container>
        <p className="mb-[152px] px-8 pt-[60px] font-caveat text-orangeDark text-2xl">
          {hero.if}
          {hero.emo} <br />
          {hero.yourLife} {hero.pleasure}
        </p>
        <Form clickFrom={clickFrom} formClassname="m-auto" />
      </Container>
    </div>
  );
};

export default FormWithBackground;
