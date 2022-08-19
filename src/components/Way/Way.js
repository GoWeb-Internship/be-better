import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { title, listContainer, wayContainer } from './Way.module.css';
const Way = () => {
  const { i18n } = useTranslation();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/route/" } }) {
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
    <div className={wayContainer}>
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <div key={node.frontmatter.language}>
              <h3 className={title}>{node.frontmatter.title}</h3>
              <div
                className={listContainer}
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
export default Way;
