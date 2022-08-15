import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Guarantee = () => {
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

  const [data] = allMarkdownRemark.nodes;

  return (
    <div className="container p-8">
      <h3>{data.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  );
};

export default Guarantee;
