import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../reusableComponents/Button';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  text,
  changeTitle,
  modalform,
  formtext,
  formtextmain,
  discountStyle,
} from './Change.module.css';
import ModalWindow from '../ModalWindow';
import Form from '../Form';
import Section from '../reusableComponents/Section';

const Change = () => {
  const { i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  const [currentChange, setCurrentChange] = useState('');
  const { t } = useTranslation();
  const buttonTranslate = t('littleComponents', { returnObjects: true });
  const modalForm = t('modalForm', { returnObjects: true });

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
      discount: markdownRemark(fileAbsolutePath: { regex: "/discount/" }) {
        frontmatter {
          ukFirst
          ukDiscount
          ukSecond
          enFirst
          enDiscount
          enSecond
          ruFirst
          ruDiscount
          ruSecond
        }
      }
    }
  `);
  const data = markdown.text.nodes;
  const disc = markdown.discount.frontmatter;

  const showModal = change => {
    setCurrentChange(change);
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };

  return (
    <Section className="tablet:-mt-[57%] laptop:-mt-[17%] desktop:-mt-[11%]">
      {data.map(node => {
        if (node.frontmatter.language === i18n.language) {
          return (
            <>
              <div className="relative mb-24 mt-24">
                <StaticImage
                  layout="fullWidth"
                  src="../../images/background/fon-min.png"
                  alt=""
                  style={{ position: 'absolute' }}
                  className="tablet:w-[47%] tablet:ml-40 tablet:pb-10 -z-10 mt-5 laptop:-mt-8 laptop:h-28 laptop:w-[79%] desktop:w-[100%] desktop:ml-[29%] ml-80 mb-16 pr-0 desktop:top-0 desktop:mt-0  max-w-5xl"
                  formats={['auto', 'webp', 'avif']}
                />
                <StaticImage
                  layout="fullWidth"
                  src="../../images/background/fontwo-min.png"
                  alt=""
                  style={{ position: 'absolute' }}
                  className="-z-20 top-0 w-full h-full   mt-20  max-w-full"
                  formats={['auto', 'webp', 'avif']}
                />
                <h3 className={changeTitle}>{node.frontmatter.title}</h3>
                <div className="flex ">
                  <div className="flex justify-between">
                    {/* <StaticImage
          layout="fullWidth"
          src="../../images/arrow-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="top-0 mt-48 pt-16  ml-10 mr-20 "
        /> */}
                    <div className="tablet:hidden desktop:block">
                      <StaticImage
                        // layout="fullWidth"
                        src="../../images/background/arrow-min.png"
                        alt=""
                        style={{ position: 'absolute' }}
                        className="tablet:hidden desktop:block -z-10   top-0 mt-40 pt-36  desktop:ml-10 mr-20 "
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div>
                    <div className="desktop:hidden">
                      <StaticImage
                        // layout="fullWidth"
                        src="../../images/background/union-min.png"
                        alt=""
                        style={{ position: 'absolute' }}
                        className="tablet:w-[5%] tablet:h-[47%] tablet:mt-[62%]  tablet:ml-20  laptop:mt-[10%] laptop:h-[50%] laptop:w-[5%] -z-10 tablet:top-[20%]  laptop:top-[17%] mt-36 pt-0 ml-[10%] mr-20 "
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div>
                    <div>
                      <div>
                        <div className={text}>
                          <div className=""></div>
                          <div
                            key={node.frontmatter.language}
                            dangerouslySetInnerHTML={{ __html: node.html }}
                          />

                          <p className={discountStyle}>
                            {disc[`${i18n.language}First`]}{' '}
                            <span className="text-black font-semibold">
                              {' '}
                              {disc[`${i18n.language}Discount`]}
                            </span>{' '}
                            {disc[`${i18n.language}Second`]}
                          </p>
                        </div>
                        <Button
                          type="button"
                          className="!bg-mainSecond -mt-[50%] border tablet:!-mt-16 laptop:!mt-5 px-16 !ml-8 desktop:!ml-28 py-2 rounded-3xl hover:!bg-[#d46828] ease-in duration-300"
                          doAction={() => showModal()}
                        >
                          {buttonTranslate.button}
                        </Button>
                      </div>
                    </div>
                    {modal && (
                      <ModalWindow
                        className={modalform}
                        handleClose={hideModal}
                      >
                        <>
                          <h2 className={formtext}>{modalForm.hi}!</h2>
                          <p className={formtext}>{modalForm.connection}</p>
                          <Form
                            clickFrom={currentChange}
                            formClassname=""
                            checkboxClassname="mb-8"
                            closeFormModal={hideModal}
                          />
                          <p className={formtextmain}>{modalForm.seeYou}</p>
                        </>
                      </ModalWindow>
                    )}
                  </div>
                  <div>
                    <div className="laptop:-ml-72 desktop:ml-20">
                      <StaticImage
                        layout="fullWidth"
                        src="../../images/background/julia-min.png"
                        alt=""
                        style={{ position: 'absolute' }}
                        className="tablet:-ml-[70%] z-10 tablet:mt-32 tablet:w-2/3 -z-10 -20 laptop:ml-0 laptop:mt-8  desktop:mt top-0 laptop:w-1/3 h-11/12 "
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div>
                    {/* <div className='laptop:hidden desktop:block'>
                          <StaticImage
                      // layout="fullWidth"
                      src="../../images/background/shadow-min.png"
                      alt=""
                      style={{ position: 'absolute' }}
                      className="bottom-0 -mb-32 -ml-56 w-[70%] "
                      formats={['auto', 'webp', 'avif']}
                    />
                    </div> */}
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
