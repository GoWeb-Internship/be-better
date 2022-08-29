import * as React from 'react';
import NotFound from '../components/notFound';
import { graphql } from 'gatsby';
import Section from '../components/reusableComponents/Section';
import Container from '../components/Container';

const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <NotFound />
      </Container>
    </Section>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

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
