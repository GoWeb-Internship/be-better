import React, { useState } from 'react';
import Section from '../reusableComponents/Section';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  couchContainer,
  flexContainer,
  mainImg,
  title,
  caveat,
  button,
} from './Couch.module.css';
import Button from '../reusableComponents/Button';
import ModalWindow from '../ModalWindow';
import Form from '../Form';
import { modalform, formtext, formtextmain } from '../Change/Change.module.css';

const Couch = () => {
  const [modal, setModal] = useState(false);
  const [currentChange, setCurrentChange] = useState('');
  const { t } = useTranslation();

  const form = t('form', { returnObjects: true });
  const modalForm = t('modalForm', { returnObjects: true });
  const couch = t('couch', { returnObjects: true });

  const showModal = change => {
    setCurrentChange(change);
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };
  return (
    <Section className={couchContainer}>
      <div className={flexContainer}>
        <StaticImage
          placeholder="blurred"
          width={366}
          height={520}
          layout="fixed"
          formats={['auto', 'webp']}
          alt="author with notebook"
          src="../../images/withNote.jpg"
          className={mainImg}
        />
        <div>
          <div className="w-[326px] relative">
            <h3 className={title}>{couch.title}</h3>
            <p className="pb-6 ">{couch.mySelf}</p>
            <p className="pb-6 ">{couch.course}</p>
            <p className="pb-12 ">{couch.noTime}</p>
            <p className={caveat}>{couch.mySelf}</p>
            <Button
              type="button"
              className={button}
              doAction={() => showModal()}
            >
              {form.button}
            </Button>
          </div>
        </div>
        <div className="relative">
          <StaticImage
            src="../../images/note.jpg"
            placeholder="blurred"
            formats={['auto', 'webp']}
            width={416}
            height={280}
            layout="fixed"
            alt="notebook"
            className="rounded-2xl"
          />
          <p className="mt-[58px] w-81">{couch.why}</p>
          <StaticImage
            src="../../images/skyscraper.jpg"
            placeholder="blurred"
            formats={['auto', 'webp']}
            width={160}
            height={176}
            layout="fixed"
            alt="skyscraper"
            className="rounded-2xl mt-[38px] mr-auto absolute right-0"
          />
        </div>
      </div>{' '}
      {modal && (
        <ModalWindow className={modalform} handleClose={hideModal}>
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
    </Section>
  );
};

export default Couch;
