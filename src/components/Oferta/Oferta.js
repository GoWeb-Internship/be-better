import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { text, btn, img } from './Oferta.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../Container';
import { Link } from 'gatsby';

const Oferta = () => {
      const { i18n } = useTranslation();

  const { allMarkdownRemark } = useStaticQuery(graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/oferta/" } }) {
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
    <Container>
    <div className='relative'>
     
          <Link
            to="/"
            className="w-16 ml-20 mt-32 pl-96 -z-20 top-0 cursor-pointer  mb-16 pr-0"
          >
            <StaticImage
              className={img}
              src="../../images/background/back.png"
              alt="background"
            />
          </Link>
         <StaticImage
                  layout="fullWidth"
                  src="../../images/background/ofertar-min.png"
                  alt=""
                  style={{ position: 'absolute' }}
                  className="w-3/4 -z-20 top-0 ml-80 mb-16 pr-0 max-w-5xl"
                  formats={['auto', 'webp', 'avif']}
                />
              
                 <StaticImage
                  layout="fullWidth"
                  src="../../images/background/ofertal-min.png"
                  alt=""
                  style=""
                  className="w-3/4 -z-10 top-0  max-w-md  !float-right mr-40  -mt-32 mb-16  h-60 rounded-lg "
                  formats={['auto', 'webp', 'avif']}
                />
              
    <div className="text-start h-96 block tablet:pl-5 laptop:pl-28 desktop:pl-72">
  
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <>
              <h3 className="text-orangeDark font-semibold text-4xl absolute mb-2 -mt-20">
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
    <div>
    <Link
            to="/"
            className={btn}
          ><span>{"< "}</span>
            На главную
          </Link>
          </div>
  </div>
  </Container>
  )
}

export default Oferta
