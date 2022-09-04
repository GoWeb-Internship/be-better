import * as React from 'react';
import 'react-phone-input-2/lib/style.css';
import Seo from '../components/seo';
import loadable from '@loadable/component';
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
// import FormWithBackground from '../components/Form/FormWithBackground';
// import FormWithVideoBg from '../components/Form/FormWithVideoBg';
import BeBetter from '../components/BeBetter';
import Change from '../components/Change';
// import StepsAdd from '../components/StepsAdd';
import Couch from '../components/Couch';
import WhyStepsAdd from '../components/WhyStepsAdd';
import Steps from '../components/Steps';
import ButtonUp from '../components/ButtonUp';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const FormWithVideoBg = loadable(() =>
  import('../components/Form/FormWithVideoBg')
);
const FormWithBackground = loadable(() =>
  import('../components/Form/FormWithBackground')
);

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  const seo = t('seo', { returnObjects: true });

  return (
    <>
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
        </Container>
        <FormWithBackground clickFrom="main-m" />
        <Container>
          <FormWithVideoBg clickFrom="main" />
          <WhyStepsAdd />
          <Price />
          <Guarantee />
          <Couch />
          <Steps />
          <Change />
          <BeBetter />
          <ButtonUp />
        </Container>

        {/* </main> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '414740170505309');
fbq('track', 'PageView');
`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=414740170505309&ev=PageView&noscript=1"
    />`,
          }}
        ></script> */}
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
