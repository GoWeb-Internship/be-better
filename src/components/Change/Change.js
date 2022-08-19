import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../reusableComponents/Button';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { text, changeTitle, modalform, formtext, formtextmain} from './Change.module.css';
import ModalWindow from '../ModalWindow';
import Form from '../Form';

const Change = () => {
    const { i18n } = useTranslation();
    const [modal, setModal] = useState(false);
    const [currentChange, setCurrentChange] = useState('');
    const { t } = useTranslation();
    const buttonTranslate = t('littleComponents', { returnObjects: true });

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
   
        <div className='relative mb-24 mt-24'>

        <StaticImage
          layout="fullWidth"
          src="../../images/background/fon-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="w-3/4 -z-10 top-0 ml-80 mb-16 pr-0 max-w-5xl"
        />
        <StaticImage
          layout="fullWidth"
          src="../../images/background/fontwo-min.png"
          alt=""
          style={{ position: 'absolute' }}
          className="-z-20 top-0 w-full h-full mt-20  max-w-full"
        />
<h3 className={changeTitle}>{node.frontmatter.title}</h3>
<div className='flex'>
          <div className='flex justify-between'>
          <StaticImage
          src="../../images/arrow-min.png"
          alt=""
          style=''
          className="top-0 h-full ml-10  mr-10 "
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
                  className="!bg-mainSecond border !ml-0 !mt-5 px-16 py-2 rounded-3xl"
                  doAction={() => showModal()}
                >
                  {buttonTranslate.button}
                </Button>
                </div>
        </div>  
        {modal && (
        <ModalWindow className={modalform} handleClose={hideModal}>
          <>
            <h2 className={formtext}>Привет!</h2>
            <p className={formtext}>Я скоро свяжусь с тобой</p>
            <Form
              clickFrom={currentChange}
              formClassname=""
              checkboxClassname="mb-8"
              closeFormModal={hideModal}
            />
            <p className={formtextmain}>Увидимся</p>
          </>
        </ModalWindow>
      )}    
          </div> 
          <div>
          <StaticImage
          src="../../images/julia-min.png"
          className='w-120 h-177 ml-8'
          alt=""
        />
        </div>
        </div>
        </div>       
                </>
              );
            }
          })}
    </div>
  )
}

export default Change
