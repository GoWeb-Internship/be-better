import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { text } from './BeBetter.module.css';

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
    <div className="laptop:flex laptop:justify-between  laptop:text-left ">
      <div className="tablet:mr-10 tablet:ml-10  desktop:mr-10  desktop:ml-40">
        {data.map(node => {
          if (node.frontmatter.language === i18n.language) {
            return (
              <>
                <h3 className="tablet:text-xl laptop:text-left laptop:w-[80%] desktop:w-[90%] tablet:text-center desktop:w-[50%]  tablet:font-medium laptop:w-[50%] laptop:font-semibold laptop:text-3xl laptop:pl-10 desktop:pl-0 text-buttonMobile pb-8">
                  {node.frontmatter.title}
                </h3>
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
      <div className='wr -ml-[30%] -mt-[1%]'>
      <div className=" desktop:mt-8">
        <div className='tablet:hidden desktop:block'>
        <StaticImage
          alt=""
          src="../../images/one-min.png"
          width=""
          height=""
          className='tablet:hidden laptop:block'
          formats={['auto', 'webp', 'avif']}
        />
        </div>
        <div className='tablet:hidden desktop:block laptop:mt-[62%]  laptop:-mr-[40%] desktop:mt-[2%] desktop:ml-[15%]  desktop:-mr-0 '>
        <StaticImage
          alt=""
          src="../../images/three-min.png"
          width=""
          height=""
          className=""
          formats={['auto', 'webp', 'avif']}
        />
        </div>
        </div>
      </div>
      <div className="tablet:hidden desktop:block  -ml-3 w-[90%] h-[5%]  z-10 -mt-[2%] desktop:-mr-[58%]">
        <StaticImage
          alt=""
          src="../../images/two-min.png"
          className="desktop:mr-6  -z-10 desktop:w-72"
          width=""
          height=""
          formats={['auto', 'webp', 'avif']}
        />
      </div>
      <div className='laptop:flex-wrap'>
      
      <div className="desktop:hidden  -mt-[2%] mr-[4%]  ml-3 w-[90%] h-[5%]  z-10 laptop:ml-[2%] laptop:-mt-[7%]">
        <StaticImage
          alt=""
          src="../../images/background/bokalu.png"
          className="desktop:mr-6  -z-10 desktop:w-72"
          width=""
          height=""
          formats={['auto', 'webp', 'avif']}
        />
      </div>
      <div className='tablet:hidden laptop:block desktop:hidden laptop:mt-[155%] laptop:mr-[12%] '>
        <StaticImage
          alt=""
          src="../../images/three-min.png"
          width=""
          height="mr-20"
          className="ml-8"
          formats={['auto', 'webp', 'avif']}
        />
        </div>
      </div>
    </div>
  );
};

export default BeBetter;
