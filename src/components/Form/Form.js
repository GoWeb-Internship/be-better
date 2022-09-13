import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import 'react-phone-input-2/lib/style.css';
import PropTypes from 'prop-types';
import { modalsuccess, modaltitle, modaltext } from './Form.module.css';
import ModalWindow from '../ModalWindow';
import JustForm from './JustForm';
import Heading from '../reusableComponents/Heading';

const Form = ({
  clickFrom = '',
  formClassname = '',
  checkboxClassname = 'mb-3',
  classnameAccept = '',
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
            <Heading
              tag="h2"
              className={modaltitle}
              text={modalSuccess.gratitude}
            />
            <p className={modaltext}>{modalSuccess.text}</p>
          </div>
        </ModalWindow>
      ) : (
        <JustForm
          openModal={setSuccessModal}
          clickFrom={clickFrom}
          formClassname={formClassname}
          checkboxClassname={checkboxClassname}
          classnameAccept={classnameAccept}
        />
      )}
    </>
  );
};

Form.propTypes = {
  clickFrom: PropTypes.string,
  formClassname: PropTypes.string,
  checkboxClassname: PropTypes.string,
  classnameAccept: PropTypes.string,
};

export default Form;
