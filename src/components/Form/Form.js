import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from '../reusableComponents/Button';
import {
  form,
  input,
  label,
  checkbox,
  check,
  phonebutton,
  phoneinput,
  phonedropdown,
  error,
  modalsuccess,
  modaltitle,
  modaltext,
} from './Form.module.css';
import locationApi from '../../services/locationApi';
import sendMessageToTg from '../../services/telegramApi';
import { schema } from '../../helpers/validation';
import ModalWindow from '../ModalWindow';

const isBrowser = typeof window !== 'undefined';

const Form = ({
  clickFrom,
  formClassname,
  checkboxClassname = 'mb-3',
  closeFormModal = null,
}) => {
  const [userLocation, setUserLocation] = React.useState('');
  const [successModal, setSuccessModal] = React.useState(false);

  const { t } = useTranslation();

  const data = t('form', { returnObjects: true });
  const modalSuccess = t('modalSuccess', { returnObjects: true });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  useFormPersist(`form-${clickFrom}`, {
    watch,
    setValue,
    storage: isBrowser ? window.localStorage : null,
  });

  locationApi()
    .then(location => setUserLocation(location))
    .catch(err => console.log(err));

  const onSubmit = async data => {
    let message = `
    <b>Request information:</b>
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Checkbox: yes
    Form send from: ${clickFrom}
    
    <b>Additional information:</b>
    <i>TransactionID: 11111111</i>
    <i>BlockID: 22222222</i>
    <i>Form name: contact</i>
    <a href="https://be-better.today">https://be-better.today</a>
    ------
    `;

    sendMessageToTg(message)
      .then(() => {
        // closeFormModal();
        // setTimeout(() => setSuccessModal(true), 1500);
        setSuccessModal(true);
      })
      .catch(error => alert(error))
      .finally(() => {
        reset();
        localStorage.removeItem(`form-${clickFrom}`);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={`${form} ${formClassname}`}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="relative">
          <input
            id="name"
            {...register('name')}
            className={input}
            placeholder=" "
          />
          <label className={label} htmlFor="name">
            {data.nameInput}
          </label>
          <p className={error}>{errors.name?.message}</p>
        </div>
        <div className="relative ">
          <input
            id="email"
            {...register('email')}
            className={input}
            placeholder=" "
          />
          <label className={label} htmlFor="email">
            E-mail
          </label>
          <p className={error}>{errors.email?.message}</p>
        </div>

        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className="relative">
              <PhoneInput
                country={userLocation || 'ua'}
                placeholder="Enter phone number"
                preferredCountries={['ua', 'gb']}
                enableSearch="true"
                searchPlaceholder="Choose country"
                disableSearchIcon="true"
                // isValid={onValidatePhoneNumber}
                containerClass={'outline-none'}
                buttonClass={phonebutton}
                inputClass={phoneinput}
                dropdownClass={phonedropdown}
                {...field}
              />
              <p className={error}>{errors.phone?.message}</p>
            </div>
          )}
        />
        <div className={`relative ${checkboxClassname}`}>
          <label className="flex items-start mt-1 mb-8 pl-2 pt-1">
            <input
              type="checkbox"
              name="checkbox"
              {...register('checkbox')}
              className={checkbox}
            />
            <div
              className={`${check} ${errors.checkbox ? '!border-error' : ''}`}
            ></div>
            <span className="ml-3	text-left text-xs text-black ">
              {data.accept}
            </span>
          </label>
          <p className="absolute top-10 left-8 text-error text-xs">
            {errors.checkbox?.message}
          </p>
        </div>
        <Button
          type="submit"
          className="h-12 w-full border border-main rounded-full text-white"
        >
          {data.button}
        </Button>
      </form>
      {successModal && (
        <ModalWindow
          className={modalsuccess}
          handleClose={() => setSuccessModal(false)}
        >
          <div>
            <h2 className={modaltitle}>{modalSuccess.gratitude} </h2>
            <p className={modaltext}>{modalSuccess.text}</p>
          </div>
        </ModalWindow>
      )}
    </>
  );
};

export default Form;
