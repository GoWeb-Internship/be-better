import React from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

const BeBetter = () => {
    const { t } = useTranslation();
   
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
    <div className=''>
      <div className="">
          {data.map(node => {
            if (node.frontmatter.language === i18n.language) {
              return (
                <>
                  <h3 className="">{node.frontmatter.title}</h3>
                  <div
                    key={node.frontmatter.language}
                    className=""
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </>
              );
            }
          })}
        </div>
        <div>
        <StaticImage
      alt=''
      src='../../images/one-min.png'
      width=''
      height=''
      />
       <StaticImage
      alt=''
      src='../../images/two-min.png'
      width=''
      height=''
      />
       <StaticImage
      alt=''
      src='../../images/three-min.png'
      width=''
      height=''
      />
        </div>
    </div>
  )
}

export default BeBetter
