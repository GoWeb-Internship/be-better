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
} from './BeBetter.module.css';

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
      avatarMin: file(name: { eq: "one-min" }) {
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
      avatarTh: file(name: { eq: "three-min" }) {
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
      avatarBoc: file(name: { eq: "bokalu" }) {
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
  const avatar = allMarkdownRemark.avatarMin.childImageSharp.gatsbyImageData;
  const avatarThree =
    allMarkdownRemark.avatarTh.childImageSharp.gatsbyImageData;
  const avatarBocalu =
    allMarkdownRemark.avatarBoc.childImageSharp.gatsbyImageData;

  return (
    <Section className={beBetterSection} id="be-better">
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
                  image={avatar}
                  alt={translate.jumper}
                  className={oneMin}
                />
              </div>
            )}

            {media !== 'mobile' && (
              <div className={divImg}>
                <GatsbyImage
                  image={avatarThree}
                  alt={translate.auto}
                  className={threeMin}
                />
              </div>
            )}
          </div>
          <div className={bocaluDiv}>
            <GatsbyImage
              image={avatarBocalu}
              alt={translate.glasses}
              className={bakaluImg}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BeBetter;
