import React from 'react';
import Section from '../reusableComponents/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import icons from '../../images/factsIcons.svg';
import Way from '../Way';
import {
  section,
  title,
  contentContainer,
  imgMob,
  img,
  titleFacts,
  listFacts,
  itemFacts,
  svgContainerFacts,
  iconFacts,
  textContainer,
  textPr,
  testSec,
  bgFacts,
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
      <h2 className={title}>{data.title}</h2>

      <StaticImage
        layout="fullWidth"
        src="../../images/background/features.jpg"
        alt=""
        style={{ position: 'absolute' }}
        className="w-full h-full -z-10 top-0"
      />
      <div className={contentContainer}>
        <div>
          <h2 className={titleFacts}>{data.title}</h2>
          {!!data.list.length && (
            <ul className={listFacts}>
              {data.list.map(({ textPrimary, svg, textSecondary, bg }) => {
                return (
                  <li className={itemFacts} key={icons}>
                    <div className={svgContainerFacts}>
                      <svg className={iconFacts}>
                        <use href={`${icons}#icon-${svg}`} />
                      </svg>
                    </div>
                    <div className={textContainer}>
                      <div className="flex mt-11 laptop:block laptop:mt-0">
                        <svg className=" w-4 h-4 fill-mainSecond mr-2 laptop:hidden ">
                          <use href={`${icons}#icon-${svg}`} />
                        </svg>
                        <p className={textPr}>{textPrimary}</p>
                      </div>
                      <p className={testSec}>{textSecondary}</p>
                      <p className={bgFacts}>{bg}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
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
