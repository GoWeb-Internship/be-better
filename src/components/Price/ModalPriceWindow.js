import React, { useState, useEffect } from 'react';
import ModalWindow from '../ModalWindow';
import Form from '../Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  modalform,
  formtitle,
  formmargin,
  formtext,
  accenttext,
  price,
} from './Price.module.css';

const ModalPriceWindow = ({ hideModal, currentPrice, currentRate }) => {
  const { t } = useTranslation();
  const form = t('form', { returnObjects: true });

  return (
    <ModalWindow className={modalform} handleClose={hideModal}>
      <>
        <h2 className={formtitle}>{form.greeting}</h2>
        <p className={formtext}>
          {form.packet}
          <span className={accenttext}>"{currentRate}"</span>
        </p>
        <p className={price}>{currentPrice}</p>
        <Form
          clickFrom={currentPrice}
          formClassname={formmargin}
          checkboxClassname="mb-8"
          closeFormModal={hideModal}
        />
        <p className={formtext}>{form.connection}</p>
      </>
    </ModalWindow>
  );
};

export default ModalPriceWindow;
