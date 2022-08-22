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
    <Section className="relative">
      <div className="relative max-h-full pb-[142px]">
        <StaticImage
          layout="fullWidth"
          src="../../images/background/str-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-64 h-20 z-1  pl-40 left-2/4 top-3/4 "
        />
        <List data={data} icons={svg} />
        <StaticImage
          layout="fullWidth"
          src="../../images/background/features.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="-z-20 w-full h-full top-[35%]"
        />
        <Reviews />
      </div>
    </Section>
  );
};

export default StepsAdd;
