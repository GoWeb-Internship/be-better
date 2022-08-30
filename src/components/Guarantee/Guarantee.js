import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {guarantee, title, text} from './Guarantee.module.css';
import Section from '../reusableComponents/Section';
import GuaranteeBg from './GuaranteeBg';

const Guarantee = () => {
  const { i18n } = useTranslation();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/guarantee/" } }
      ) {
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
    <Section className={guarantee}>
      <GuaranteeBg />
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <div key={node.frontmatter.title}>
              <h2 className={title}>
                {node.frontmatter.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: node.html }}
                className={text}
              />
            </div>
          );
        }
      })}
    </Section>
  );
};

export default Guarantee;
