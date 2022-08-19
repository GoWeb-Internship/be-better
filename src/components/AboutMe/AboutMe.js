import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import AboutYou from '../AboutYou';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  title,
  sectionContainer,
  textContainer,
  text,
} from './AboutMe.module.css';

const AboutMe = () => {
  const { i18n } = useTranslation();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/aboutMe/" } }) {
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
    <section className={sectionContainer} id="nav-about">
      <div className="flex justify-center">
        <div>
          <StaticImage
            src="../../images/aboutMe.jpg"
            alt="author"
            width={456}
            height={480}
            className="rounded-2xl  "
            placeholder="blurred"
            formats={['auto', 'webp']}
          />
        </div>
        <div className={textContainer}>
          {data.map(node => {
            if (node.frontmatter.language === i18n.language) {
              return (
                <div key={node.frontmatter.language}>
                  <h3 className={title}>{node.frontmatter.title}</h3>
                  <AboutYou />
                  <div
                    className={text}
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>

      <StaticImage
        className="ml-auto mt-13"
        src="../../images/signature.png"
        width={265}
        height={80}
        layout="fixed"
        alt=""
      />
    </section>
  );
};

export default AboutMe;
