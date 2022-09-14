import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { title, container, listContainer } from './AboutYou.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MarkdownList from '../reusableComponents/MarkdownList';

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
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <MarkdownList
              listClassName={listContainer}
              titleClassName={title}
              tag="h2"
              data={node}
            />
          );
        }
      })}
    </div>
  );
};

export default AboutYou;
