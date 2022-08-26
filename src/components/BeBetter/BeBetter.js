import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { textBeBetter } from './BeBetter.module.css';
import Section from '../reusableComponents/Section';

const BeBetter = () => {
  const { i18n } = useTranslation();

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/beBetter/" } }) {
        nodes {
          html
          frontmatter {
            title
            language
          }
          id
        }
      }
    }
  `);
  const data = allMarkdownRemark.nodes;
  return (
    <Section >
      <div>
        {data.map(node => {
          if (node.frontmatter.language === i18n.language) {
            return (
              <>
                <h3 className='text-buttonMobile font-medium text-xl text-center ml-2 mr-2 mt-4 mb-3'>
                  {node.frontmatter.title}
                </h3>
                <div
                  key={node.frontmatter.language}
                  className={textBeBetter}
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              </>
            );
          }
        })}
      </div>
      <div >
          <StaticImage
            alt=""
            src="../../images/background/bokalu.png"
            className=""
            width=""
            height=""
            formats={['auto', 'webp', 'avif']}
          />
        </div>
    </Section>
  );
};

export default BeBetter;
