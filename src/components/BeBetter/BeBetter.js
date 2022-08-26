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
      <div className='laptop:flex'>
      <div>
        {data.map(node => {
          if (node.frontmatter.language === i18n.language) {
            return (
              <>
                <h3 className='text-buttonMobile font-medium text-xl text-center ml-2 mr-2 mt-4 mb-3 laptop:font-semibold laptop:text-4xl laptop:pl-18 laptop:ml-32 desktop:w-[500px] desktop:ml-48 desktop:text-left desktop:pr-10'>
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
      <div className='desktop:flex desktop:-mr-40'>
      <div className='laptop:-ml-24 desktop:-ml-16'>
        <div className="tablet:hidden desktop:block desktop:mt-14 desktop:mb-8">
            <StaticImage
              alt=""
              src="../../images/one-min.png"
              width=""
              height=""
              className="tablet:hidden laptop:block desktop:w-[341] desktop:h-[240]"
              formats={['auto', 'webp', 'avif']}
            />
          </div>
        <div className="tablet:hidden laptop:block float: right laptop:ml-28">
          <StaticImage
            alt=""
            src="../../images/three-min.png"
            width=""
            height=""
            className="ml-8 rounded-2xl laptop:w-[200px] laptop:h-[162px] mb-4 desktop:w-[204px] desktop:h-[280]"
            formats={['auto', 'webp', 'avif']}
          />
        </div>
        </div>
      <div >
          <StaticImage
            alt=""
            src="../../images/background/bokalu.png"
            className="laptop:pt-20  laptop:w-[310px] laptop:h-[450px] rounded-2xl desktop:w-[308] desktop:h-[440]"
            width=""
            height=""
            formats={['auto', 'webp', 'avif']}
          />
        </div>
       
        </div>
        </div>
    </Section>
  );
};

export default BeBetter;
