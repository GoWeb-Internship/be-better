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
    <Section className="h-[480px] pt-8 pb-16 px-5 desktop:h-[568px] desktop:pt-30 desktop:pl-74 text-left">
      <GuaranteeBg />
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <div key={node.frontmatter.title}>
              <h2 className="mb-[173px] desktop:mb-20 text-center text-mainSecond text-xl font-medium desktop:text-34 desktop:font-semibold">
                {node.frontmatter.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: node.html }}
                className="w-[220px] text-sm desktop:w-[432px] desktop:text-xl	"
              />
            </div>
          );
        }
      })}
    </Section>
  );
};

export default Guarantee;
