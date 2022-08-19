import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../reusableComponents/Button';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { text, changeTitle} from './Change.module.css';
import ModalWindow from '../ModalWindow';
import Form from '../Form';

const Change = () => {
    const { i18n } = useTranslation();
    const [modal, setModal] = useState(false);
    const [currentChange, setCurrentChange] = useState('');
    const buttonTranslate = t('littleComponents', { returnObjects: true });
    const { t } = useTranslation();

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
   
        <div className='flex  mb-24 mt-24'>
          <div className='flex justify-between'>
          <StaticImage
          src="../../images/arrow-min.png"
          alt=""
          style=''
          className="top-0 h-full mr-28 "
        />
        <div>
        <h3 className={changeTitle}>{node.frontmatter.title}</h3>
          <div
            key={node.frontmatter.language}
            className={text}
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          <Button
                  type="button"
                  className="border border-gray-300 px-16 py-2 rounded-3xl"
                  doAction={() => showModal()}
                >
                  {buttonTranslate.button}
                </Button>
          
        </div>  
        {modal && (
        <ModalWindow className="" handleClose={hideModal}>
          <>
            <h2 className="">Привет!</h2>
            <p className="">Я скоро свяжусь с тобой</p>
            <Form
              clickFrom={currentChange}
              formClassname=""
              checkboxClassname="mb-8"
              closeFormModal={hideModal}
            />
            <p className="">Увидимся</p>
          </>
        </ModalWindow>
      )}    
          </div> 
          <div>
          <StaticImage
          src="../../images/julia-min.png"
          className='w-120 h-177'
          alt=""
        />
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
