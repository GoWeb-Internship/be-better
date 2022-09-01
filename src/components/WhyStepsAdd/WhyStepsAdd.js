import React from 'react';
import Section from '../reusableComponents/Section';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import List from '../reusableComponents/Steps';
import svg from '../../images/iconsnew.svg';
import Reviews from '../Reviews';

const StepsAdd = () => {
  const { t } = useTranslation();
  const data = t('stepsnew', { returnObjects: true });

  return (
    <Section className="relative" id="whyStep">
      <div className="relative max-h-full ">
        <div className="tablet:hidden desktop:block">
          <StaticImage
            layout="fullWidth"
            src="../../images/background/van.png"
            alt="features"
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
        <div className="tablet:hidden laptop:block desktop:hidden">
          <StaticImage
            layout="fullWidth"
            src="../../images/background/grow.png"
            alt="features"
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
        <div className="laptop:hidden">
          <StaticImage
            layout="fullWidth"
            src="../../images/background/vectwo-min.png"
            alt="vectwo"
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
        <List data={data} icons={svg} />
        <Reviews />
      </div>
    </Section>
  );
};

export default StepsAdd;
