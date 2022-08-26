import React from 'react';
import Section from '../reusableComponents/Section';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import List from '../reusableComponents/List';
import svg from '../../images/factsIcons.svg';
import Way from '../Way';
import {
  section,
  title,
  contentContainer,
  imgMob,
  img,
} from './Facts.module.css';
import { useMedia } from 'react-use';

const Facts = () => {
  const { t } = useTranslation();
  const data = t('facts', { returnObjects: true });
  const isWide = useMedia('(min-width:1440px');

  return (
    <Section className={section}>
      <h3 className={title}>{data.title}</h3>

      <StaticImage
        layout="fullWidth"
        src="../../images/background/features.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <div className={contentContainer}>
        <List data={data} icons={svg} />

        {isWide ? (
          <div className="hidden desktop:block">
            <StaticImage
              alt="foto"
              src="../../images/factsFoto.jpg"
              className={img}
              placeholder="blurred"
              formats={['auto', 'webp', 'avif']}
            />
          </div>
        ) : (
          <div className="desktop:hidden ">
            <StaticImage
              alt="foto"
              src="../../images/factMob.jpg"
              className={imgMob}
              placeholder="blurred"
              formats={['auto', 'webp', 'avif']}
            />
          </div>
        )}
      </div>
      <Way />
    </Section>
  );
};

export default Facts;
