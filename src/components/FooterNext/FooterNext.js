import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { title } from './FooterNext.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const FooterNext = () => {
  const { i18n } = useTranslation();

  const markdown = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/footer/" } }
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
      discount: markdownRemark(fileAbsolutePath: { regex: "/discount/" }) {
        frontmatter {
          ukFirst
          ukDiscount
          ukSecond
          enFirst
          enDiscount
          enSecond
          ruFirst
          ruDiscount
          ruSecond
        }
      }
    }
  `);
  const data = markdown.text.nodes;
  const disc = markdown.discount.frontmatter;

  return (
    <div>
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <div
              key={node.frontmatter.language}
              className="ml-7 mb-5 text-start"
            >
              <h3 className={title}>{node.frontmatter.title}</h3>
              <p className="text-black text-lg leading-[23px] text-caveat ">
                {disc[`${i18n.language}First`]}{' '}
                <span className="text-mainSecond font-semibold">
                  {' '}
                  {disc[`${i18n.language}Discount`]}
                </span>{' '}
                {disc[`${i18n.language}Second`]}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FooterNext;
