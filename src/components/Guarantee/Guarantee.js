import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from 'components/reusableComponents/Section';
import GuaranteeBg from './GuaranteeBg';
import MarkdownList from 'components/reusableComponents/MarkdownList';

import { guarantee, title, text } from './Guarantee.module.css';

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
            <MarkdownList
              listClassName={text}
              titleClassName={title}
              tag="h2"
              data={node}
            />
          );
        }
      })}
    </Section>
  );
};

export default Guarantee;
//
