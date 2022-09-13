import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { guarantee, title, text } from './Guarantee.module.css';
import Section from '../reusableComponents/Section';
import GuaranteeBg from './GuaranteeBg';
import Heading from '../reusableComponents/Heading';

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
    <Section className={guarantee} id="guarantee">
      <GuaranteeBg />
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <div key={node.frontmatter.title}>
              <Heading
                tag="h2"
                className={title}
                text={node.frontmatter.title}
              />
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
