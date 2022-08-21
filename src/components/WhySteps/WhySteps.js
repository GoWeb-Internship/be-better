import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { textSteps, spepstext, steps} from './WhySteps.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';


const Steps = () => {
    const { i18n } = useTranslation();

    const { allMarkdownRemark } = useStaticQuery(graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/steps/" } }) {
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
          src="../../images/background/str-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-64 h-20 z-1  pl-40 left-2/4 top-3/4 "
        />
        <div className={textSteps}>
        {data.map(node => {
          if (node.frontmatter.language === i18n.language) {
            return (
              <div key={node.frontmatter.language}>
                <h3 className={steps}>{node.frontmatter.title}</h3>
                <div
                  className={spepstext}
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





