import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import PropTypes from 'prop-types';
import {
  mainContainer,
  content,
  ifYou,
  emo,
  formInMain,
  checkboxInMain,
  discountText,
  discount,
  sociaListlInMain,
  socialLinkInMain,
} from './Form.module.css';
import Section from '../reusableComponents/Section';
import Container from '../Container';
import Video from '../Video';
import Form from './Form';
import Social from '../Social';
import FormWithBackground from '../Form/FormWithBackground';
import WithDiscount from '../reusableComponents/WithDiscount';

const FormWithVideoBg = ({ clickFrom }) => {
  const { t } = useTranslation();
  const hero = t('hero', { returnObjects: true });
  const isMobile = useMedia('(max-width:767px)');
  const isDesktop = useMedia('(min-width:1440px)');

  return (
    <Section>
      {isMobile ? (
        <FormWithBackground clickFrom="main-m" />
      ) : (
        <div className={mainContainer}>
          {isDesktop ? (
            <Video />
          ) : (
            <StaticImage
              layout="fullWidth"
              src="../../images/background/formTablet.jpg"
              alt="tablet form background"
              style={{ position: 'absolute' }}
              className="w-full h-full -z-10 top-0"
            />
          )}
          <Container>
            <div className={content}>
              <div className="text-left ">
                <div className="w-81  ">
                  <p className={ifYou}>
                    {hero.if}
                    <br />
                    <span className={emo}>{hero.emo}</span>
                    <br />
                    {hero.yourLife}
                    <br /> {hero.pleasure}
                  </p>
                  <Form
                    clickFrom={clickFrom}
                    formClassname={formInMain}
                    checkboxClassname={checkboxInMain}
                  />
                  <WithDiscount
                    classnameText={discountText}
                    classnameDiscount={discount}
                  />
                </div>
              </div>
              <div className="ml-[213px]">
                <Social classNameList={sociaListlInMain} classNameLink={socialLinkInMain} />
              </div>
            </div>
          </Container>
        </div>
      )}
    </Section>
  );
};

FormWithVideoBg.propTypes = {
  clickFrom: PropTypes.string
}

export default FormWithVideoBg;
