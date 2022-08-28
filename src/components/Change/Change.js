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
                <div className='ml-[152px] -z-10 laptop:ml-[265px] laptop:-mt-40 desktop:ml-[404px] '>
                <StaticImage
                  layout="fullWidth"
                  src="../../images/background/fon-min.png"
                  alt=""
                  style={{ position: 'absolute' }}
                  className="w-[154px] h-[64px] float-right move-right -z-10 laptop:w-[504px] laptop:h-[96px] desktop:w-[1036px] desktop:h-[152px]"
                  formats={['auto', 'webp', 'avif']}
                />
                </div>
                <StaticImage
                  layout="fullWidth"
                  src="../../images/background/fontwo-min.png"
                  alt=""
                  style={{ position: 'absolute' }}
                  className="-z-20  w-full h-full mt-6 max-w-full laptop:mt-24 desktop:mt-[149px]"
                  formats={['auto', 'webp', 'avif']}
                />
              
                <h3 className={changeTitle}>{node.frontmatter.title}</h3>
                <div className="laptop:float-right laptop:-mt-40 display:block desktop:-mt-[77px]">
                      <StaticImage
                        src="../../images/background/julia-min.png"
                        alt="z-10"
                        style={{ position: 'absolute' }}
                        className="w-[280px] h-[280px] -ml-44 rounded-2xl laptop:w-[310px] laptop:h-[442px] desktop:w-[480px] desktop:h-[734px] desktop:pr-[60px]"
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div>
                    
                    <div className="desktop:hidden">
                      <StaticImage
                        src="../../images/background/union-min.png"
                        alt=""
                        style={{ position: 'absolute' }}
                        className="w-[88px] h-[476px] -z-10 -ml-32 mt-[300px] laptop:w-[88px] laptop:h-[444px] laptop:mt-8 laptop:-ml-64"
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div>
                <div className="flex ">
                  <div className="flex justify-between">
           
                    <div className="tablet:hidden desktop:block ml-[188px] mt-[33px]">
                      <StaticImage
                        src="../../images/background/arrow-min.png"
                        alt=""
                        style={{ position: 'absolute' }}
                        className="h-[574px] "
                        formats={['auto', 'webp', 'avif']}
                      />
                    </div>
                   
                    <div>
                      <div className='float-left'>
                        <div className={text}>
                          
                         
                            <div>
                          <div
                            className='laptop:-mt-[255px] desktop:w-[624px] float-left block'
                            key={node.frontmatter.language}
                            dangerouslySetInnerHTML={{ __html: node.html }}
                          />
                          </div>
                   
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
                          className="!bg-mainSecond  border   px-16 !ml-8 desktop:!ml-28 py-2 rounded-3xl hover:!bg-[#d46828] ease-in duration-300 laptop:!ml-[80px]"
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
                          className='ml-5'
                            clickFrom={currentChange}
                            formClassname="!ml-5 laptop:!ml-0 desktop:!ml-12"
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
