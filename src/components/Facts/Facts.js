import React from 'react';
import Section from '../reusableComponents/Section';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import List from '../reusableComponents/List';
import svg from '../../images/factsIcons.svg';

const Facts = () => {
  const { t } = useTranslation();
  const data = t('facts', { returnObjects: true });

  return (
    <Section>
      <div>
        <h3>{data.title}</h3>

        <List data={data.list} icons={svg} />
      </div>
    </Section>
  );
};

export default Facts;
