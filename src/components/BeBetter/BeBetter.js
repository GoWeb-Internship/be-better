import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { textBeBetter, beBetterSection, textBeBet, varning, contBeBetter, beBetterCont, oneMin, divImg, threeMin, bakaluImg, containerBeBetter } from './BeBetter.module.css';
import Section from '../reusableComponents/Section';

const BeBetter = () => {
  const { i18n } = useTranslation();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/beBetter/" } }) {
        nodes {
          html
          frontmatter {
            title
            language
          }
          id
        }
      }
    }
  `);
  const data = allMarkdownRemark.nodes;
  return (
    <Section
      className={beBetterSection}
      id="be-better"
    >
      <div className={containerBeBetter}>
        <div>
          {data.map(node => {
            if (node.frontmatter.language === i18n.language) {
              return (
                <div key={node.frontmatter.title}>
                  <h3 className={textBeBet}>{node.frontmatter.title}</h3>
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
              <StaticImage
                alt="mountains"
                src="../../images/one-min.png"
                className={oneMin}
                formats={['auto', 'webp', 'avif']}/>
            </div>
            <div className={divImg}>
              <StaticImage
                alt="car"
                src="../../images/three-min.png"
                className={threeMin}
                formats={['auto', 'webp', 'avif']}/>
            </div>
          </div>
          <div>
            <StaticImage alt="grocers" 
              src="../../images/background/bokalu.png" 
              className={bakaluImg}
              formats={['auto', 'webp', 'avif']}/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BeBetter;
