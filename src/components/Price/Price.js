import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../reusableComponents/Button';
import { changeLanguage } from 'i18next';

const Price = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/price/" } }) {
        nodes {
          html
          frontmatter {
            description
            title
          }
          id
        }
      }
    }
  `);
  const data = allMarkdownRemark.nodes;

  return (
    <div className="container m-auto text-center">
      <h1>Price</h1>
      <ul className="flex mt-4">
        {allMarkdownRemark &&
          data.map(({ html, id, frontmatter: { description } }) => {
            return (
              <li key={id}>
                <p>{description}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Price;
