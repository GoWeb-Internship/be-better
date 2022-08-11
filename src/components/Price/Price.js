import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../reusableComponents/Button';
// import { container, list, item, button } from './Price.module.css';
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
      <ul className="flex mt-4 text-center justify-center">
        {allMarkdownRemark &&
          data.map(({ id, frontmatter: { hour, month, price, economy } }) => {
            return (
              <div
                className="p-3 w-80 mr-8 last:mr-0 border-2 border-gray-300 rounded-lg"
                key={id}
              >
                <li>
                  <p>{price}</p>
                  {economy && <p>{economy}</p>}
                  <p>{month}</p>
                  <p>{hour}</p>
                </li>
                <Button className="border border-gray-300 px-16 py-2 rounded-3xl">
                  Записаться
                </Button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Price;
