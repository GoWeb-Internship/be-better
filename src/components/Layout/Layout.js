import * as React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '../Footer';
import { IoIosArrowRoundDown } from 'react-icons/io';
import Header from '../Header';
import Arrow from '../ArrowSvg';

const Layout = ({ children }) => {
  const shortcodes = { Arrow, IoIosArrowRoundDown };
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
      <main className="container m-auto">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
