import * as React from 'react';
import { graphql } from 'gatsby';

const Price = props => {
  console.log('Props>', props);
  return (
    <div>
      <h1>Price</h1>
    </div>
  );
};

export default Price;

export const query = graphql`
  query Price {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
          date
          description
        }
        id
      }
    }
  }
`;
