import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { title, container, textContainer, text } from './AboutMe.module.css';

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
    <section className={container}>
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
        <div
          className={text}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
      </div>
    </section>
  );
};

export default AboutMe;
