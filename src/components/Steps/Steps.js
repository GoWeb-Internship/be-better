import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '../reusableComponents/Section';
import List from '../reusableComponents/Page';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import svg from '../../images/iconku.svg';

const Steps = () => {
  
  const { t } = useTranslation();
  const data = t('steps', { returnObjects: true });

  return (
    <Section className="pt-20 pb-16 relative">
    <div className="relative max-h-full">
      <StaticImage
          layout="fullWidth"
          src="../../images/background/Frame-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-96 h-52 -z-10  pl-40 left-2/4 top-2/4 "
        />
         <StaticImage
          layout="fullWidth"
          src="../../images/background/backgroundBlu.jpg"
          alt=""
          style={{ position: 'absolute' }}
          className="-z-20 w-full h-full"
        />
        <List data={data} icons={svg} />
    </div>
    </Section>
  );
};

export default Steps;
