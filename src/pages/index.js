import * as React from 'react';
import 'react-phone-input-2/lib/style.css';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Price from '../components/Price';
import Formula from '../components/Formula';
import Guarantee from '../components/Guarantee';
import ClientHistory from '../components/ClientHistory';
import Container from '../components/Container';
import AboutMe from '../components/AboutMe';
import Facts from '../components/Facts';
import Hero from '../components/Hero';
import FormInMain from '../components/Form/FormInMain';
import BeBetter from '../components/BeBetter';
import Change from '../components/Change';
import Couch from '../components/Couch';
import WhyStepsAdd from '../components/WhyStepsAdd';
import Steps from '../components/Steps';
import ButtonUp from '../components/ButtonUp';
import { useTranslation } from 'gatsby-plugin-react-i18next';
// import Events from '../components/scripts/Events';

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  const seo = t('seo', { returnObjects: true });

  return (
    <>
      {/* <Events /> */}
      <Seo
        title={seo.title}
        description={seo.description}
        lang={i18n.language}
      />
      <Layout id="home">
        {/* <main> */}
        <Hero />
        <Container>
          <AboutMe />
          <Facts />
          <ClientHistory />
          <Formula />
          <FormInMain clickFrom="main" />
          <WhyStepsAdd />
          <Price />
          <Guarantee />
          <Couch />
          <Steps />
          <Change />
          <BeBetter />
          <ButtonUp />
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;

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
