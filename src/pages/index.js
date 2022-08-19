import * as React from 'react';
import 'react-phone-input-2/lib/style.css';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Price from '../components/Price';
import Formula from '../components/Formula';
import Guarantee from '../components/Guarantee';
import ClientHistory from '../components/ClientHistory';
// import Video from '../components/Video';
import Container from '../components/Container';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import BeBetter from '../components/BeBetter'
import Change from '../components/Change';

const IndexPage = () => {
  return (
    <Layout id="home">
      {/* <main> */}
      <Container>
        <Hero />
        <AboutMe />
        <ClientHistory />
        <Formula />
        <Price />
        <Guarantee />
        {/* <Video /> */}
        <Change/>
        <BeBetter/>
      </Container>
      {/* </main> */}
      <script
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
      ></script>
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
