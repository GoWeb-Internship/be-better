import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { textFooter, containerFooter, text } from './FooterNext.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const FooterNext = () => {
  const { i18n } = useTranslation();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/footer/" } }) {
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
    <div className={containerFooter}>
      <div className={textFooter}>
        {data.map(node => {
          if (node.frontmatter.language === i18n.language) {
            return (
              <div key={node.frontmatter.language}>
                <h3 className={textFooter}>{node.frontmatter.title}</h3>
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
  );
};

export default FooterNext;
