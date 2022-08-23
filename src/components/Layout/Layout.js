import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { animateScroll } from 'react-scroll';
import Footer from '../Footer';
import Header from '../Header';
import icons from '../../images/sprite.svg';

const Layout = ({ children }) => {
  const [showButton, setShowButton] = React.useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  React.useEffect(() => {
    window.addEventListener('scroll', toggleButtonUp);

    return () => {
      window.removeEventListener('scroll', toggleButtonUp);
    };
  }, []);

  const toggleButtonUp = () => {
    if (window.scrollY > document.documentElement.clientHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
      {showButton && (
        <button
          type="button"
          className="fixed right-20 bottom-11"
          onClick={() => animateScroll.scrollToTop()}
        >
          <svg width={44} height={44}>
            <use href={`${icons}#button-up`} />
          </svg>
        </button>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
