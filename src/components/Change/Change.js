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
                  className=""
                  formats={['auto', 'webp', 'avif']}
                />
                <StaticImage
                  layout="fullWidth"
                  src="../../images/background/fontwo-min.png"
                  alt=""
                  style={{ position: 'absolute' }}
                  className="-z-20  top-0 w-full h-full   mt-20  max-w-full"
                  formats={['auto', 'webp', 'avif']}
                />
                <h3 className={changeTitle}>{node.frontmatter.title}</h3>

                <div className="">
                      <StaticImage
                        src="../../images/background/julia-min.png"
                        alt="z-10"
                        style={{ position: 'absolute' }}
                        className="w-[280px] h-[280px] -ml-44 rounded-2xl"
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div>
                <div className="flex ">
                  <div className="flex justify-between">
           
                    <div className="tablet:hidden desktop:block">
                      <StaticImage
                        src="../../images/background/arrow-min.png"
                        alt=""
                        style={{ position: 'absolute' }}
                        className=""
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div>
                    {/* <div className="desktop:hidden">
                      <StaticImage
                        src="../../images/background/union-min.png"
                        alt=""
                        style={{ position: 'absolute' }}
                        className=""
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div> */}
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
