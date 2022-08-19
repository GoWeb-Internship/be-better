import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { formulaContainer } from './Formula.module.css';
import Section from '../reusableComponents/Section';
import { StaticImage } from 'gatsby-plugin-image';

import icons from '../../images/formulaIcons.svg';
import List from '../reusableComponents/List';

const Formula = () => {
  const { t } = useTranslation();
  const data = t('formula', { returnObjects: true });

  return (
    <Section className={formulaContainer}>
      <StaticImage
        layout="fullWidth"
        src="../../images/background/backgroundBlu.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <List data={data} icons={icons} formula />
    </Section>
  );
};

export default Formula;
