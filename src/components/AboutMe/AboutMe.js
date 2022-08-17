import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import AboutYou from '../AboutYou';
import {
  title,
  sectionContainer,
  textContainer,
  text,
} from './AboutMe.module.css';

const AboutMe = () => {
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
  const [data] = allMarkdownRemark.nodes;

  return (
    <section className={sectionContainer}>
      <div className="flex">
        <div>
          <StaticImage
            src="../../images/aboutMe.jpg"
            alt="author"
            width={456}
            height={480}
            placeholder="blurred"
            formats={['auto', 'webp']}
          />
        </div>
        <div className={textContainer}>
          <h3 className={title}>{data.frontmatter.title}</h3>
          <AboutYou />
          <div
            className={text}
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
        </div>
      </div>

      <StaticImage
        className="ml-auto mt-13"
        src="../../images/signature.png"
        width={265}
        height={80}
        layout="fixed"
      />
    </section>
  );
};

export default AboutMe;
