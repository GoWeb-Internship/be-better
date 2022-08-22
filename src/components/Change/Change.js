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
} from './Change.module.css';
import ModalWindow from '../ModalWindow';
import Form from '../Form';

const Change = () => {
  const { i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  const [currentChange, setCurrentChange] = useState('');
  const { t } = useTranslation();
  const buttonTranslate = t('littleComponents', { returnObjects: true });
  const modalForm = t('modalForm', { returnObjects: true });

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/change/" } }) {
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

  const showModal = change => {
    setCurrentChange(change);
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };

  return (
    <div>
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
                  className="w-3/4 -z-10 top-0 ml-80 mb-16 pr-0 max-w-5xl"
                  formats={['auto', 'webp', 'avif']}
                />
                <StaticImage
                  layout="fullWidth"
                  src="../../images/background/fontwo-min.png"
                  alt=""
                  style={{ position: 'absolute' }}
                  className="-z-20 top-0 w-full h-full mt-20  max-w-full"
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
                    <StaticImage
                      // layout="fullWidth"
                      src="../../images/background/arrow-min.png"
                      alt=""
                      style={{ position: 'absolute' }}
                      className="-z-10   top-0 mt-40 pt-36  ml-10 mr-20 "
                      formats={['auto', 'webp', 'avif']}
                    />
                    <div>
                      <div>
                        <div
                          key={node.frontmatter.language}
                          className={text}
                          dangerouslySetInnerHTML={{ __html: node.html }}
                        />
                        <Button
                          type="button"
                          className="!bg-mainSecond border !mt-5 px-16 !ml-28 py-2 rounded-3xl hover:!bg-[#d46828] ease-in duration-300"
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
                    <StaticImage
                      layout="fullWidth"
                      src="../../images/background/julia-min.png"
                      alt=""
                      style={{ position: 'absolute' }}
                      className="-z-10 mt-20 ml-20 top-0 w-1/3 h-11/12 "
                      formats={['auto', 'webp', 'avif']}
                    />
                    {/* <StaticImage
          
          src="../../images/julia-min.png"
          className='w-120 h-177  mr-4 -z-10 ml-20'
          style={{ position: 'absolute' }}
          alt=""
          layout="fullWidth"
        /> */}
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default Change;
