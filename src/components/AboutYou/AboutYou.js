import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { title, container, listContainer } from './AboutYou.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Heading from '../reusableComponents/Heading';

const AboutYou = () => {
  const { i18n } = useTranslation();

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

  const data = allMarkdownRemark.nodes;

  return (
    <div className={container}>
      {data.map(node => (
        <>
          {node.frontmatter.language === i18n.language && (
            <div key={node.frontmatter.language}>
              <Heading
                className={title}
                tag="h2"
                text={node.frontmatter.title}
              />
              <div
                className={listContainer}
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default AboutYou;
