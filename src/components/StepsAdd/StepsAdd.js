import React from 'react';
import Section from '../reusableComponents/Section';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import Page from '../reusableComponents/Page';
import Steps from '../Steps';
import svg from '../../images/factsIcons.svg';

const StepsAdd = () => {
  const { t } = useTranslation();
  const data = t('stepsAdd', { returnObjects: true });
  return (
    <Section className=" relative">
      <StaticImage
        layout="fullWidth"
        src="../../images/background/results-min.png"
        alt=""
        style={{ position: 'absolute' }}
        className="-z-20 w-full h-full"
      />
      <div className="flex px-46 ">
        <Page data={data} icons={svg} />
      </div>
      <Steps />
    </Section>
  );
};

export default StepsAdd;
