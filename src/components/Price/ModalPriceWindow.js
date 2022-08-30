import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import JustForm from '../Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  modalform,
  formtitle,
  formmargin,
  formtext,
  accenttext,
  price,
  checkbox,
  underformtext,
} from './Price.module.css';

const ModalPriceWindow = ({ hideModal, currentPrice, currentRate }) => {
  const [successMessage, setSuccessMessage] = React.useState(false);
  const { t } = useTranslation();
  const form = t('form', { returnObjects: true });
  const modalSuccess = t('modalSuccess', { returnObjects: true });

  return (
    <ModalWindow className={modalform} handleClose={hideModal}>
      {successMessage ? (
        <div>
          <h2 className="mb-[10px] desktop:mb-1 text-xl desktop:text-2xl font-medium desktop:font-semibold text-main">
            {modalSuccess.gratitude}{' '}
          </h2>
          <p className="desktop:font-medium text-base desktop:text-xl text-black">
            {modalSuccess.text}
          </p>
        </div>
      ) : (
        <>
          <h2 className={formtitle}>{form.greeting}</h2>
          <p className={formtext}>
            {form.packet}
            <span className={accenttext}>"{currentRate}"</span>
          </p>
          <p className={price}>{currentPrice}</p>
          <JustForm
            clickFrom={currentPrice}
            formClassname={formmargin}
            checkboxClassname={checkbox}
            openModal={setSuccessMessage}
          />
          <p className={underformtext}>{form.connection}</p>
        </>
      )}
    </ModalWindow>
  );
};

ModalPriceWindow.propTypes = {
  hideModal:PropTypes.func.isRequired,
  currentPrice: PropTypes.string.isRequired,
  currentRate: PropTypes.string.isRequired,
}
export default ModalPriceWindow;
