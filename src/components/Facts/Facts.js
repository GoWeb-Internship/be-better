import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { IconContext } from 'react-icons';
import useObserver from 'components/ObserverWrapper/useObserver';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import Way from 'components/Way';
import Container from 'components/Container';
import useMediaRules from 'helpers/getMedia';

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
  textContainer,
  textPr,
  testSec,
  bgFacts,
  background,
} from './Facts.module.css';

import {
  MdBusinessCenter,
  MdOutlineThumbUp,
  MdOutlineStackedLineChart,
  MdOutlineDomain,
  MdOutlineMoreTime,
  MdFactCheck,
} from 'react-icons/md';

import icons from 'images/factsIcons.svg';

const factsIcons = [
  <MdBusinessCenter />,
  <MdOutlineThumbUp />,
  <MdOutlineStackedLineChart />,
  <MdOutlineDomain />,
  <MdFactCheck />,
  <MdOutlineMoreTime />,
];

const Facts = () => {
  const photo = useStaticQuery(graphql`
    query {
      mob: file(name: { eq: "factsPhotoMob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      desk: file(name: { eq: "factsPhotoDesk" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  const { t } = useTranslation();
  const data = t('facts', { returnObjects: true });
  const media = useMediaRules();

  const [show, getRef] = useObserver();

  const photoMob = photo.mob.childImageSharp.gatsbyImageData;
  const photoDesk = photo.desk.childImageSharp.gatsbyImageData;

  return (
    <Section
      className={section}
      id="facts"
      backgroundClass={show ? background : ''}
    >
      <Container getRef={getRef}>
        <Heading tag="h2" className={title} text={data.title} />

        <StaticImage
          layout="fullWidth"
          src="../../images/background/features.jpg"
          alt={data.background}
          style={{ position: 'absolute' }}
          objectFit={'cover'}
          className="h-full w-[320px] laptop:w-[768px] desktop:w-[1440px] -z-10 top-0"
        />

        <div className={contentContainer}>
          <div>
            <Heading tag="h2" className={titleFacts} text={data.title} />
            {!!data.list.length && (
              <ul className={listFacts}>
                {data.list.map(({ textPrimary, textSecondary, bg }, index) => {
                  return (
                    <li className={itemFacts} key={`${icons}-${index}`}>
                      {media !== 'mobile' && (
                        <div className={svgContainerFacts}>
                          <IconContext.Provider
                            value={{
                              className:
                                'stair-icons mt-[11px] fill-[mainSecond] ',
                              color: '#FF9B62',
                            }}
                          >
                            {factsIcons[index]}
                          </IconContext.Provider>
                        </div>
                      )}
                      <div className={textContainer}>
                        <div className="flex mt-11 laptop:block laptop:mt-0">
                          {media === 'mobile' && (
                            <IconContext.Provider
                              value={{
                                className: 'w-4 h-4 mr-2',
                                color: '#FF9B62',
                              }}
                            >
                              {factsIcons[index]}
                            </IconContext.Provider>
                          )}
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
          {media === 'desktop' ? (
            <GatsbyImage image={photoDesk} alt={data.author} className={img} />
          ) : (
            <GatsbyImage
              image={photoMob}
              alt={data.author}
              className={imgMob}
            />
          )}
        </div>
        <Way />
      </Container>
    </Section>
  );
};

export default Facts;
