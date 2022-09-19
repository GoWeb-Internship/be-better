import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

import Section from 'components/reusableComponents/Section';
import Heading from 'components/reusableComponents/Heading';
import WithDiscount from 'components/reusableComponents/WithDiscount';
import Button from 'components/reusableComponents/Button';
import useMediaRules from 'helpers/getMedia';

import { preloadFormInModal } from 'services/preloader';

import {
  text,
  changeTitle,
  discountStyle,
  discount,
  button,
  background,
} from './Change.module.css';
import Container from 'components/Container';

const FormInModal = loadable(() => import('../Form/FormInModal'));

const Change = () => {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);

  const media = useMediaRules();

  const buttonTranslate = t('littleComponents', { returnObjects: true });
  const altTranslate = t('changes', { returnObjects: true });

  const markdown = useStaticQuery(graphql`
    query {
      text: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/change/" } }
      ) {
        nodes {
          html
          frontmatter {
            title
            language
          }
          id
        }
      }
      avatarMin: file(name: { eq: "fontwo-min" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarAbout: file(name: { eq: "about" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarJuliaMob: file(name: { eq: "changeMob" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarJuliaTablet: file(name: { eq: "changeTablet" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarJuliaDesk: file(name: { eq: "changeDesk" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
      avatarUnion: file(name: { eq: "union-min" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            layout: CONSTRAINED
          )
        }
      }
    }
  `);
  const data = markdown.text.nodes;
  const avatarJlMob = markdown.avatarJuliaMob.childImageSharp.gatsbyImageData;
  const avatarJuliaTablet =
    markdown.avatarJuliaTablet.childImageSharp.gatsbyImageData;
  const avatarJuliaDesk =
    markdown.avatarJuliaDesk.childImageSharp.gatsbyImageData;

  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };

  return (
    <Section backgroundClass={background} id="change">
      <Container className="relative h-full pb-8 laptop:pb-20 ">
        {data.map((node, id) => (
          <React.Fragment key={id}>
            {node.frontmatter.language === i18n.language && (
              <div className="laptop:mt-[160px]" id={node.frontmatter.language}>
                <div className="ml-[165px] laptop:ml-[265px] laptop:-mt-40 desktop:ml-[404px] ">
                  <StaticImage
                    layout="fullWidth"
                    src="../../images/fon-min.png"
                    alt={altTranslate.orangeBgRectangular}
                    style={{ position: 'absolute' }}
                    className="w-[154px] h-[64px] float-right move-right -z-10 laptop:w-[504px] laptop:h-[96px] desktop:w-[1036px] desktop:h-[152px]"
                    formats={['auto', 'webp']}
                  />
                </div>

                {media === 'desktop' ? (
                  <StaticImage
                    layout="fullWidth"
                    src="../../images/background/about.jpg"
                    alt={altTranslate.arrowWithBg}
                    style={{ position: 'absolute' }}
                    className="-z-20 w-[1440px] h-[750px] mt-6   desktop:mt-[149px]"
                    formats={['auto', 'webp']}
                  />
                ) : (
                  <StaticImage
                    layout="fullWidth"
                    src="../../images/fontwo-min.png"
                    alt={altTranslate.mobileBg}
                    style={{ position: 'absolute' }}
                    className="-z-20  w-full h-full mt-[64px] laptop:mt-[84px] max-w-full  "
                    formats={['auto', 'webp']}
                  />
                )}

                <Heading
                  tag="h2"
                  className={changeTitle}
                  text={node.frontmatter.title}
                />
                {media === 'mobile' && (
                  <div className="overflow-hidden">
                    <GatsbyImage
                      image={avatarJlMob}
                      alt={altTranslate.author}
                      style={{ position: 'absolute' }}
                      className="w-[280px] h-[280px] -ml-44 rounded-2xl"
                    />
                  </div>
                )}
                {media === 'tablet' && (
                  <div className="laptop:float-right laptop:-mt-40 overflow-hidden">
                    <GatsbyImage
                      image={avatarJuliaTablet}
                      alt={altTranslate.author}
                      style={{ position: 'absolute' }}
                      className="-ml-44 rounded-2xl laptop:w-[310px] laptop:h-[442px]"
                    />
                  </div>
                )}
                {media === 'desktop' && (
                  <div className="laptop:float-right laptop:-mt-40 display:block desktop:-mt-[77px] desktop:-mr-[20px] overflow-hidden">
                    <GatsbyImage
                      image={avatarJuliaDesk}
                      alt={altTranslate.author}
                      style={{ position: 'absolute' }}
                      className="-ml-44 rounded-2xl desktop:w-[480px] desktop:h-[734px] desktop:pr-[60px] desktop:-ml-[600px] desktop:-mt-[40px] desktop:pb-[80px]"
                    />
                  </div>
                )}
                {media !== 'desktop' && (
                  <StaticImage
                    src="../../images/union-min.png"
                    alt={altTranslate.arrow}
                    style={{ position: 'absolute' }}
                    className="w-[88px] h-[476px] -z-10 -ml-32 mt-[300px] laptop:w-[88px] laptop:h-[444px] laptop:mt-8 laptop:-ml-64"
                    formats={['auto', 'webp']}
                  />
                )}
                <div className="flex justify-between">
                  <div className="float-left desktop:ml-[150px] desktop:mr-[100px]">
                    <div className={text}>
                      <div
                        className="laptop:-mt-[255px] laptop:mb-16 desktop:mb-6 desktop:w-[524px] float-left block"
                        key={node.frontmatter.language}
                        dangerouslySetInnerHTML={{ __html: node.html }}
                      />
                      <WithDiscount
                        classnameText={discountStyle}
                        classnameDiscount={discount}
                      />
                    </div>
                    <Button
                      id="button-change"
                      type="button"
                      className={button}
                      doAction={() => showModal()}
                      onMouseOver={preloadFormInModal}
                      onTouchStart={preloadFormInModal}
                    >
                      {buttonTranslate.button}
                    </Button>
                  </div>
                  {modal && (
                    <FormInModal
                      hideModal={hideModal}
                      currentPlace="change in life"
                    />
                  )}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </Container>
    </Section>
  );
};

export default Change;
