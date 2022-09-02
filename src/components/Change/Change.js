import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../reusableComponents/Button';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  text,
  changeTitle,
  discountStyle,
  discount,
} from './Change.module.css';
import FormInModal from '../Form/FormInModal';
import Section from '../reusableComponents/Section';
import WithDiscount from '../reusableComponents/WithDiscount';
import Heading from '../reusableComponents/Heading';

const Change = () => {
  const { i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  const [currentChange, setCurrentChange] = useState('');
  const { t } = useTranslation();
  const buttonTranslate = t('littleComponents', { returnObjects: true });

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
    }
  `);
  const data = markdown.text.nodes;

  const showModal = change => {
    setCurrentChange(change);
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };

  return (
    <Section
      className="tablet:-mt-[57%] laptop:-mt-[17%] desktop:-mt-[11%]"
      id="change"
    >
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <>
              <div
                className="relative mb-24 mt-24"
                id={node.frontmatter.language}
              >
                <div className="ml-[152px] -z-10 laptop:ml-[265px] laptop:-mt-40 desktop:ml-[404px] ">
                  <StaticImage
                    layout="fullWidth"
                    src="../../images/background/fon-min.png"
                    alt="fon"
                    style={{ position: 'absolute' }}
                    className="w-[154px] h-[64px] float-right move-right -z-10 laptop:w-[504px] laptop:h-[96px] desktop:w-[1036px] desktop:h-[152px]"
                    formats={['auto', 'webp', 'avif']}
                  />
                </div>
                <div className="desktop:hidden">
                  <StaticImage
                    layout="fullWidth"
                    src="../../images/background/fontwo-min.png"
                    alt="background"
                    style={{ position: 'absolute' }}
                    className="-z-20  w-full h-full mt-6 max-w-full laptop:mt-24 desktop:mt-[149px]"
                    formats={['auto', 'webp', 'avif']}
                  />
                </div>
                <div className="tablet:hidden desktop:block">
                  <StaticImage
                    layout="fullWidth"
                    src="../../images/background/about.png"
                    alt="background"
                    style={{ position: 'absolute' }}
                    className="-z-20  w-[1440px] h-[728px] mt-6 max-w-full laptop:mt-24 desktop:mt-[149px]"
                    formats={['auto', 'webp', 'avif']}
                  />
                </div>
                <Heading
                  tag="h2"
                  className={changeTitle}
                  text={node.frontmatter.title}
                />
                {/* <h3 className={changeTitle}>{node.frontmatter.title}</h3> */}
                <div className="laptop:float-right laptop:-mt-40 display:block desktop:-mt-[77px] desktop:-mr-[20px]">
                  <StaticImage
                    src="../../images/background/julia.png"
                    alt="julia"
                    style={{ position: 'absolute' }}
                    className="w-[280px] h-[280px] -ml-44 rounded-2xl laptop:w-[310px] laptop:h-[442px] desktop:w-[480px] desktop:h-[734px] desktop:pr-[60px] desktop:pt-[100px]"
                    formats={['auto', 'webp', 'avif']}
                  />
                </div>

                <div className="desktop:hidden">
                  <StaticImage
                    src="../../images/background/union-min.png"
                    alt="union"
                    style={{ position: 'absolute' }}
                    className="w-[88px] h-[476px] -z-10 -ml-32 mt-[300px] laptop:w-[88px] laptop:h-[444px] laptop:mt-8 laptop:-ml-64"
                    formats={['auto', 'webp', 'avif']}
                  />
                </div>
                <div className="flex ">
                  <div className="flex justify-between">
                    <div>
                      <div className="float-left desktop:ml-[150px] desktop:mr-[100px]">
                        <div className={text}>
                          <div>
                            <div
                              className="laptop:-mt-[255px] desktop:w-[524px] desktop:ml-[108px]  desktop:-mt-[255px]  float-left block"
                              key={node.frontmatter.language}
                              dangerouslySetInnerHTML={{ __html: node.html }}
                            />
                          </div>
                          <div className="desktop:ml-[100px] desktop:!w-[350px] ">
                            <WithDiscount
                              classnameText={discountStyle}
                              classnameDiscount={discount}
                            />
                          </div>
                        </div>
                        <Button
                          type="button"
                          className="!bg-mainSecond border px-16 !ml-8 desktop:!ml-28 py-2 rounded-3xl hover:!bg-[#d46828] focus:!bg-[#d46828] focus:outline-none ease-in duration-300 laptop:!ml-[80px]"
                          doAction={() => showModal()}
                        >
                          {buttonTranslate.button}
                        </Button>
                      </div>
                    </div>
                    {modal && (
                      <FormInModal
                        hideModal={hideModal}
                        currentPlace="change in life"
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </Section>
  );
};

export default Change;
