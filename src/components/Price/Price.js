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
            hour
            month
            price
            economy
          }
          id
        }
      }
    }
  `);
  const data = allMarkdownRemark.nodes;
  console.log(data);
  return (
    <div className="container m-auto text-center">
      <h1>Price</h1>
      <ul className="flex mt-4">
        {allMarkdownRemark &&
          data.map(({ id, frontmatter: { hour, month, price, economy } }) => {
            return (
              <li key={id}>
                <p>{price}</p>
                {economy && <p>{economy}</p>}
                <p>{month}</p>
                <p>{hour}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Price;
