import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { textSteps, text, steps} from './Steps.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Steps = () => {
    const { i18n } = useTranslation();

    const { allMarkdownRemark } = useStaticQuery(graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/result/" } }) {
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
   
    <div className='relative max-h-full'>
         <StaticImage
          layout="fullWidth"
          src="../../images/background/black-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="-z-20 w-full h-full"
        />
        <div className={textSteps}>
        {data.map(node => {
          if (node.frontmatter.language === i18n.language) {
            return (
              <div key={node.frontmatter.language}>
                <h3 className={steps}>{node.frontmatter.title}</h3>
                <div
                  className={text}
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  )
}

export default Steps
