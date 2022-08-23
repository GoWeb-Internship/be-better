import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { donation } from './Donation.module.css';
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
    <div className={donation}>
      <p>{text}</p>
    </div>
  );
};

export default Donations;
