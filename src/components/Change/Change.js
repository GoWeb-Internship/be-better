import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { text} from './Change.module.css';

const Change = () => {
    const { i18n } = useTranslation();
   
    const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/change/" } }) {
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
  const data = allMarkdownRemark.nodes
  return (
    <div>
       {data.map(node => {
            if (node.frontmatter.language === i18n.language) {
              return (
                <>
                  <h3>{node.frontmatter.title}</h3>
                  <div
                    key={node.frontmatter.language}
                    className={text}
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </>
              );
            }
          })}
    </div>
  )
}

export default Change
