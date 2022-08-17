import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {textFooter, containerFooter, text} from './FooterNext.module.css';

const FooterNext = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/footer/" } }) {
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
  const [data] = allMarkdownRemark.nodes;
  return (
    <div className={containerFooter}>
      <h2 className={textFooter}>{data.frontmatter.title}</h2>
      <div
      className={text}
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
      
    </div>
  )
}

export default FooterNext
