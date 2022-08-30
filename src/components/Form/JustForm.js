import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PhoneInput from 'react-phone-input-2';
import PropTypes from 'prop-types';
import 'react-phone-input-2/lib/style.css';
import Button from '../reusableComponents/Button';
import {
  form,
  input,
  label,
  checkbox,
  checkboxLabel,
  check,
  acceptText,
  phonebutton,
  phoneinput,
  phonedropdown,
  error,
  checkError,
  button,
} from './Form.module.css';
import locationApi from '../../services/locationApi';
import sendMessageToTg from '../../services/telegramApi';
import { schema } from '../../helpers/validation';

const isBrowser = typeof window !== 'undefined';

const JustForm = ({
  clickFrom = '',
  formClassname = '',
  checkboxClassname = 'mb-3',
  openModal,
}) => {
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
  const [userLocation, setUserLocation] = React.useState('');

  locationApi()
    .then(location => setUserLocation(location))
    .catch(err => console.log(err));

  useFormPersist(`form-${clickFrom}`, {
    watch,
    setValue,
    storage: isBrowser ? window.localStorage : null,
  });

  const { t } = useTranslation();
  const data = t('form', { returnObjects: true });

  const onSubmit = async data => {
    let message = `
    <b>Request information:</b>
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Checkbox: yes
    
    <b>Additional information:</b>
    <i>Form name: contact</i>
    <i>Form send from:</i> <b>${clickFrom}</b>
    <a href="https://be-better.today">https://be-better.today</a>
    ------
    `;

    sendMessageToTg(message)
      .then(() => {
        openModal(true);
      })
      .catch(error => alert(error))
      .finally(() => {
        reset();
        localStorage.removeItem(`form-${clickFrom}`);
      });
  };

  return (
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
          id={`name-${clickFrom}`}
          {...register('name')}
          className={input}
          placeholder=" "
        />
        <label className={label} htmlFor={`name-${clickFrom}`}>
          {data.nameInput}
        </label>
        <p className={error}>{errors.name?.message}</p>
      </div>
      <div className="relative ">
        <input
          id={`email-${clickFrom}`}
          {...register('email')}
          className={input}
          placeholder=" "
        />
        <label className={label} htmlFor={`email-${clickFrom}`}>
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
        <label className={checkboxLabel}>
          <input
            type="checkbox"
            name="checkbox"
            {...register('checkbox')}
            className={checkbox}
          />
          <div
            className={`${check} ${errors.checkbox ? '!border-error' : ''}`}
          ></div>
          <span className={acceptText}>
            {data.accept}
          </span>
        </label>
        <p className={checkError}>
          {errors.checkbox?.message}
        </p>
      </div>
      <Button
        type="submit"
        className={button}
      >
        {data.button}
      </Button>
    </form>
  );
};

JustForm.propTypes = {
  clickFrom: PropTypes.string.isRequired,
  formClassname: PropTypes.string,
  checkboxClassname: PropTypes.string,
  openModal: PropTypes.func.isRequired,
}
export default JustForm;
