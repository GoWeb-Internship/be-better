import React from 'react';
import Section from '../reusableComponents/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
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
  const foto = useStaticQuery(graphql`
    query {
      mob: file(name: { eq: "factMob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
      desk: file(name: { eq: "factsFoto" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  const { t } = useTranslation();
  const data = t('facts', { returnObjects: true });
  const isWide = useMedia('(min-width:1440px');

  const fotoMob = foto.mob.childImageSharp.gatsbyImageData;
  const fotoDesk = foto.desk.childImageSharp.gatsbyImageData;

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
          <GatsbyImage image={fotoDesk} alt="foto" className={img} />
        ) : (
          <GatsbyImage image={fotoMob} alt="foto" className={imgMob} />
        )}
      </div>
      <Way />
    </Section>
  );
};

export default Facts;
