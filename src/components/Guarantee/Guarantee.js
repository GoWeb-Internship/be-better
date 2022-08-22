import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusableComponents/Section';
import GuaranteeBg from './GuaranteeBg';
import { useTranslation } from 'gatsby-plugin-react-i18next';

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
    <Section className="h-[568px] pt-30 pl-74 text-left">
      <GuaranteeBg />
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <div key={node.frontmatter.title}>
              <h2 className="mb-20 text-mainSecond text-34 font-semibold">
                {node.frontmatter.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: node.html }}
                className="w-[432px] text-xl	"
              />
            </div>
          );
        }
      })}
    </Section>
  );
};

export default Guarantee;
