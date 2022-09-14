import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  textBeBetter,
  beBetterSection,
  textBeBet,
  varning,
  contBeBetter,
  beBetterCont,
  oneMin,
  divImg,
  threeMin,
  bakaluImg,
  containerBeBetter,
} from './BeBetter.module.css';
import Section from '../reusableComponents/Section';
import Heading from '../reusableComponents/Heading';

const BeBetter = () => {
  const { i18n } = useTranslation();

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
            formats: [AUTO, WEBP, AVIF]
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
            formats: [AUTO, WEBP, AVIF]
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
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

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
          {data.map(node => {
            if (node.frontmatter.language === i18n.language) {
              return (
                <div key={node.frontmatter.title}>
                  <Heading
                    tag="h2"
                    className={textBeBet}
                    text={node.frontmatter.title}
                  />
                  <div
                    key={node.frontmatter.language}
                    className={textBeBetter}
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </div>
              );
            }
          })}
        </div>
        <div className={varning}>
          <div className={contBeBetter}>
            <div className={beBetterCont}>
              <GatsbyImage
                image={avatar}
                alt="result"
                style={{ position: 'absolute' }}
                className={oneMin}
              />
            </div>
            <div className={divImg}>
              <GatsbyImage
                image={avatarThree}
                alt="car"
                style={{ position: 'absolute' }}
                className={threeMin}
              />
            </div>
          </div>
          <div>
            <GatsbyImage
              image={avatarBocalu}
              alt="grocers"
              style={{ position: 'absolute' }}
              className={bakaluImg}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BeBetter;
