import React from 'react';
import Section from '../reusableComponents/Section';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import List from '../reusableComponents/List';
import svg from '../../images/factsIcons.svg';
import Way from '../Way';

const Facts = () => {
  const { t } = useTranslation();
  const data = t('facts', { returnObjects: true });

  return (
    <Section className="pt-20 pb-16 relative">
      <StaticImage
        layout="fullWidth"
        src="../../images/background/features.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <div className="flex px-46 ">
        <List data={data} icons={svg} />
        <StaticImage
          alt=""
          src="../../images/factsFoto.jpg"
          width={380}
          height={560}
          className="rounded-2xl ml-13 "
          placeholder="blurred"
          formats={['auto', 'webp']}
        />
      </div>
      <Way />
    </Section>
  );
};

export default Facts;
