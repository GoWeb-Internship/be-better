import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import {
  modalform,
  modaltitle,
  modaltext,
  formHi,
  formConnect,
  modalcheck,
  modalAccept,
  formMargins,
  formSee,
} from './Form.module.css';
import JustForm from './JustForm';
import ModalWindow from '../ModalWindow';

const FormInModal = ({ hideModal, currentPlace = '' }) => {
  const [successMessage, setSuccessMessage] = React.useState(false);
  const { t } = useTranslation();
  const modalForm = t('modalForm', { returnObjects: true });
  const modalSuccess = t('modalSuccess', { returnObjects: true });

  return (
    <ModalWindow className={modalform} handleClose={hideModal}>
      {successMessage ? (
        <div>
          <h2 className={modaltitle}>{modalSuccess.gratitude} </h2>
          <p className={modaltext}>{modalSuccess.text}</p>
        </div>
      ) : (
        <>
          <p className={formHi}>{modalForm.hi}!</p>
          <p className={formConnect}>{modalForm.connection}</p>
          <JustForm
            clickFrom={currentPlace}
            formClassname={formMargins}
            checkboxClassname={modalcheck}
            classnameAccept={modalAccept}
            openModal={setSuccessMessage}
          />
          <p className={formSee}>{modalForm.seeYou}!</p>
        </>
      )}
    </ModalWindow>
  );
};

FormInModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  currentPlace: PropTypes.string,
}

export default FormInModal;
