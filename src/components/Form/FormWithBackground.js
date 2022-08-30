import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import {mobContainer, mobIfYou} from './Form.module.css';
import Form from './Form';
import Container from '../Container';

const FormWithBackground = ({ clickFrom }) => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  return (
    <div className={mobContainer}>
      <StaticImage
        layout="fullWidth"
        src="../../images/background/formMobile.jpg"
        alt="mobileform background"
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <Container>
        <p className={mobIfYou}>
          {hero.if}
          {hero.emo} <br />
          {hero.yourLife} {hero.pleasure}
        </p>
        <Form clickFrom={clickFrom} formClassname="m-auto" />
      </Container>
    </div>
  );
};

FormWithBackground.propTypes = {
  clickFrom: PropTypes.string
}

export default FormWithBackground;
