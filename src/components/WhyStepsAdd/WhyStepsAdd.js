import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import List from 'components/reusableComponents/Steps';
import Reviews from 'components/Reviews';
import useMediaRules from 'helpers/getMedia';
import svg from 'images/iconsnew.svg';
import { gradient } from './WhyStepsAdd.module.css';

const Background = () => {
  return (
    <div className="absolute top-0 h-full w-screen left-1/2 -translate-x-1/2 -z-30">
      <div
        className={`absolute top-0 left-0 w-screen h-full ${gradient}`}
      ></div>
    </div>
  );
};

const StepsAdd = () => {
  const { t } = useTranslation();
  const data = t('stepsnew', { returnObjects: true });
  const media = useMediaRules();

  return (
    <Section id="whyStep" Background={Background}>
      <div className=" max-h-full ">
        {media === 'desktop' && (
          <StaticImage
            layout="fullWidth"
            src="../../images/van.png"
            alt={data.background}
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
            formats={['auto', 'webp']}
          />
        )}
        {media === 'tablet' && (
          <StaticImage
            layout="fullWidth"
            src="../../images/grow.png"
            alt={data.background}
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
            formats={['auto', 'webp']}
          />
        )}
        {media === 'mobile' && (
          <StaticImage
            layout="fullWidth"
            src="../../images/vectwo-min.png"
            alt={data.background}
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
            formats={['auto', 'webp']}
          />
        )}
        <List data={data} icons={svg} />
        <Reviews />
      </div>
    </Section>
  );
};

export default StepsAdd;
