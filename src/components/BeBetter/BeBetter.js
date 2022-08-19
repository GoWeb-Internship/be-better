import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { text} from './BeBetter.module.css';

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
    <div className='flex'>
      <div className="">
          {data.map(node => {
            if (node.frontmatter.language === i18n.language) {
              return (
                <>
                  <h3 className='font-semibold text-3xl text-buttonMobile pb-8 pb-8'>{node.frontmatter.title}</h3>
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
        <div className=''>
        <StaticImage
      alt=''
      src='../../images/one-min.png'
      width=''
      height=''
      
      />
       <StaticImage
      alt=''
      src='../../images/three-min.png'
      width=''
      height=''
      className='ml-4'
      />
      </div>
      <div>
       <StaticImage
      alt=''
      src='../../images/two-min.png'
      width=''
      height=''
      />
      </div>
        
    </div>
  )
}

export default BeBetter
