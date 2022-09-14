import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import MarkdownList from 'components/reusableComponents/MarkdownList';

import { title, container, listContainer } from './AboutYou.module.css';

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
      {data.map((node, id) => (
        <React.Fragment key={id}>
          {node.frontmatter.language === i18n.language && (
            <MarkdownList
              listClassName={listContainer}
              titleClassName={title}
              tag="h2"
              data={node}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AboutYou;
