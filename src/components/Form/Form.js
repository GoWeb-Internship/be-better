import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import 'react-phone-input-2/lib/style.css';
import { modalsuccess, modaltitle, modaltext } from './Form.module.css';
import ModalWindow from '../ModalWindow';
import JustForm from './JustForm';

const Form = ({
  clickFrom = '',
  formClassname = '',
  checkboxClassname = 'mb-3',
}) => {
  const [successModal, setSuccessModal] = React.useState(false);

  const { t } = useTranslation();
  const modalSuccess = t('modalSuccess', { returnObjects: true });

  return (
    <>
      {successModal ? (
        <ModalWindow
          className={modalsuccess}
          handleClose={() => setSuccessModal(false)}
        >
          <div>
            <h2 className={modaltitle}>{modalSuccess.gratitude} </h2>
            <p className={modaltext}>{modalSuccess.text}</p>
          </div>
        </ModalWindow>
      ) : (
        <JustForm
          openModal={setSuccessModal}
          clickFrom={clickFrom}
          formClassname={formClassname}
          checkboxClassname={checkboxClassname}
        />
      )}
    </>
  );
};

export default Form;
