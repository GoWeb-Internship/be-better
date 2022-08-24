import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { textFooter, containerFooter, text } from './FooterNext.module.css';
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
    <div className={containerFooter}>
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <div key={node.frontmatter.language}>
              <h3 className={textFooter}>{node.frontmatter.title}</h3>

              <div>
                <p className=" text-caveat">
                  {disc[`${i18n.language}First`]}{' '}
                  <span className="  text-mainSecond ">
                    {' '}
                    {disc[`${i18n.language}Discount`]}
                  </span>{' '}
                  {disc[`${i18n.language}Second`]}
                </p>
                <div
                  className={text}
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FooterNext;
