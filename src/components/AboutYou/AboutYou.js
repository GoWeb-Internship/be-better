import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { title, container, listContainer } from './AboutYou.module.css';
const AboutYou = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/aboutYou/" } }) {
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
    <div className={container}>
      <h3 className={title}>{data.frontmatter.title}</h3>
      <div
        className={listContainer}
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </div>
  );
};

export default AboutYou;
