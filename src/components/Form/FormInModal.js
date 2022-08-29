import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import JustForm from './JustForm';
import ModalWindow from '../ModalWindow';
import { modalform, modaltitle, modaltext, modalcheck } from './Form.module.css';

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
          <p className="text-base laptop:text-xl">{modalForm.hi}!</p>
          <p className="text-base mb-[72px] laptop:text-xl laptop:mb-13">
            {modalForm.connection}
          </p>
          <JustForm
            clickFrom={currentPlace}
            formClassname="m-auto mb-2 laptop:mb-8"
            checkboxClassname={modalcheck}
            openModal={setSuccessMessage}
          />
          <p className="text-center text-sm laptop:text-base">
            {modalForm.seeYou}!
          </p>
        </>
      )}
    </ModalWindow>
  );
};

export default FormInModal;
