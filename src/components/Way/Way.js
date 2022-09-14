import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import MarkdownList from 'components/reusableComponents/MarkdownList';

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
            <MarkdownList
              listClassName={listContainer}
              titleClassName={title}
              tag="h3"
              data={node}
            />
          );
        }
      })}
    </div>
  );
};
export default Way;
