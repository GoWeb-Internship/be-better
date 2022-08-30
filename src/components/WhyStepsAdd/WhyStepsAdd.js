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
        <StaticImage
          layout="fullWidth"
          src="../../images/background/str-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-[416px] h-[128px] tablet:hidden laptop:block  laptop:left-1/4 z-1 laptop:top-[45%]  desktop:pl-40 desktop:left-2/4 desktop:top-[35%] "
        />
        <div className="tablet:hidden laptop:block">
          <StaticImage
            layout="fullWidth"
            src="../../images/background/features.jpg"
            alt=""
            style={{ position: 'absolute' }}
            className="-z-20 w-full h-full"
          />
        </div>
        <div className="laptop:hidden">
          <StaticImage
            layout="fullWidth"
            src="../../images/background/vectwo-min.png"
            alt=""
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
