import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Price from '../components/Price';

const IndexPage = () => {
  return (
    <Layout>
      <main className="container text-center mt-4 ">
        <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
        <Form />
        <Price />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

// export const query = graphql`
//   query PriceF {
//     allMarkdownRemark {
//       nodes {
//         html
//         frontmatter {
//           title
//           date
//           description
//         }
//         id
//       }
//     }
//   }
// `;
