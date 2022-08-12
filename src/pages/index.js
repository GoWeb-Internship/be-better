import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Price from '../components/Price';
import 'react-phone-input-2/lib/style.css';
import Social from '../components/Social';

const IndexPage = () => {
  return (
    <Layout>
      <main className="container text-center mt-4 ">
        <Form clickFrom="hero" />
        <Price />
        <Form clickFrom="footer" />
        <Social />
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
