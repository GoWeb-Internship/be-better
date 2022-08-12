import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Price from '../components/Price';

const IndexPage = () => {
  return (
    <Layout>
      <main className="container text-center mt-4 ">
        <Form />
        <Price />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Be-better</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
