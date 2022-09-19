import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import MarkdownList from 'components/reusableComponents/MarkdownList';
import useMediaRules from 'helpers/getMedia';

import {
  textBeBetter,
  beBetterSection,
  textBeBet,
  pictures,
  pictureDesktop,
  beBetterCont,
  oneMin,
  divImg,
  threeMin,
  bocaluDiv,
  bakaluImg,
  containerBeBetter,
  background,
} from './BeBetter.module.css';
import Container from 'components/Container';

const BeBetter = () => {
  const { t, i18n } = useTranslation();
  const media = useMediaRules();

  const allMarkdownRemark = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/beBetter/" } }
      ) {
        nodes {
          html
          frontmatter {
            title
            language
          }
          id
        }
      }
      avatarMin: file(name: { eq: "jumperDesk" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarCar: file(name: { eq: "carDesk" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarCarTablet: file(name: { eq: "carTablet" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarGlassesDesk: file(name: { eq: "glassesDesk" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarGlassesMob: file(name: { eq: "glassesMob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  const translate = t('bebetter', { returnObjects: true });

  const data = allMarkdownRemark.text.nodes;
  const jumper = allMarkdownRemark.avatarMin.childImageSharp.gatsbyImageData;
  const avatarCarDesk =
    allMarkdownRemark.avatarCar.childImageSharp.gatsbyImageData;
  const avatarCarTablet =
    allMarkdownRemark.avatarCar.childImageSharp.gatsbyImageData;
  const avatarGlasses =
    allMarkdownRemark.avatarGlassesDesk.childImageSharp.gatsbyImageData;
  const avatarGlassesMob =
    allMarkdownRemark.avatarGlassesMob.childImageSharp.gatsbyImageData;

  return (
    <Section backgroundClass={background} id="be-better">
      <Container className={beBetterSection}>
        <div className={containerBeBetter}>
          <div>
            {data.map((node, id) => (
              <React.Fragment key={id}>
                {node.frontmatter.language === i18n.language && (
                  <MarkdownList
                    listClassName={textBeBetter}
                    titleClassName={textBeBet}
                    tag="h2"
                    data={node}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className={pictures}>
            <div className={pictureDesktop}>
              {media === 'desktop' && (
                <div className={beBetterCont}>
                  <GatsbyImage
                    image={jumper}
                    alt={translate.jumper}
                    className={oneMin}
                  />
                </div>
              )}

              {media === 'desktop' && (
                <div className={divImg}>
                  <GatsbyImage
                    image={avatarCarDesk}
                    alt={translate.auto}
                    className={threeMin}
                  />
                </div>
              )}
              {media === 'tablet' && (
                <div className={divImg}>
                  <GatsbyImage
                    image={avatarCarTablet}
                    alt={translate.auto}
                    className={threeMin}
                  />
                </div>
              )}
            </div>
            <div className={bocaluDiv}>
              {media !== 'mobile' && (
                <GatsbyImage
                  image={avatarGlasses}
                  alt={translate.glasses}
                  className={bakaluImg}
                />
              )}

              {media === 'mobile' && (
                <GatsbyImage
                  image={avatarGlassesMob}
                  alt={translate.glasses}
                  className={bakaluImg}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BeBetter;
