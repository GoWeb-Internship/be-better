import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Donations = () => {
  const { i18n } = useTranslation();
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/donations/" } }
      ) {
        nodes {
          frontmatter {
            ukDonations
            enDonations
            ruDonations
          }
        }
      }
    }
  `);
  const [frontmatter] = allMarkdownRemark.nodes;
  const text = frontmatter.frontmatter[`${i18n.language}Donations`];
  return (
    <div className=" mt-14 w-480 text-center m-auto ">
      <p>{text}</p>
    </div>
  );
};

export default Donations;
