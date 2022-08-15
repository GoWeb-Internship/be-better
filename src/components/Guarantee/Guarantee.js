import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
