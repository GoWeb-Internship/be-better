import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import List from 'components/reusableComponents/Steps';
import Reviews from 'components/Reviews';

import svg from 'images/iconsnew.svg';

const StepsAdd = () => {
  const { t } = useTranslation();
  const data = t('stepsnew', { returnObjects: true });

  return (
    <Section className="relative" id="whyStep">
      <div className="relative max-h-full ">
        <div className="tablet:hidden desktop:block">
          <StaticImage
            layout="fullWidth"
            src="../../images/van.png"
            alt={data.background}
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
        <div className="tablet:hidden laptop:block desktop:hidden">
          <StaticImage
            layout="fullWidth"
            src="../../images/grow.png"
            alt={data.background}
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
        <div className="laptop:hidden">
          <StaticImage
            layout="fullWidth"
            src="../../images/vectwo-min.png"
            alt={data.background}
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
