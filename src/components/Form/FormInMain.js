import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';

import Section from 'components/reusableComponents/Section';
import Container from 'components/Container';
import Video from 'components/Video';
import Form from './Form';
import Social from 'components/Social';
import WithDiscount from 'components/reusableComponents/WithDiscount';

import {
  mainContainer,
  mobContainer,
  tabContainer,
  content,
  soctitle,
  ifYou,
  emo,
  formInMain,
  checkboxInMain,
  acceptInMain,
  discountText,
  discount,
  sociaListlInMain,
} from './Form.module.css';

const FormInMain = ({ clickFrom }) => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  const isDesktop = useMedia('(min-width:1440px)');

  return (
    <Section id="main-form">
      <div className={mainContainer}>
        <div className={mobContainer}>
          <StaticImage
            layout="fullWidth"
            src="../../images/background/formMobile.jpg"
            alt={hero.background}
            style={{ position: 'absolute' }}
            className="w-full h-full -z-10 top-0"
          />
        </div>
        <div className={tabContainer}>
          <StaticImage
            layout="fullWidth"
            src="../../images/background/formTablet.jpg"
            alt={hero.background}
            style={{ position: 'absolute' }}
            className="w-full h-full -z-10 top-0"
          />
        </div>
        {isDesktop && <Video />}
        <Container>
          <div className={content}>
            <div className={soctitle}>
              <div className="mr-[30px] laptop:mr-0 desktop:ml-[156px]">
                <Social classNameList={sociaListlInMain} />
              </div>
              <div className="laptop:w-81 text-left ">
                <p className={ifYou}>
                  {hero.if}
                  <br />
                  <span className={emo}>{hero.emo}</span>
                  <br />
                  {hero.yourLife}
                  <br /> {hero.pleasure}
                </p>
              </div>
            </div>
            <Form
              clickFrom={clickFrom}
              formClassname={formInMain}
              checkboxClassname={checkboxInMain}
              classnameAccept={acceptInMain}
            />
            <WithDiscount
              classnameText={discountText}
              classnameDiscount={discount}
            />
          </div>
        </Container>
      </div>
    </Section>
  );
};

FormInMain.propTypes = {
  clickFrom: PropTypes.string,
};

export default FormInMain;
