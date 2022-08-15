import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from '../reusableComponents/Button';
// import s from './Form.module.css';
import locationApi from '../../services/locationApi';
import sendMessageToTg from '../../services/telegramApi';
import { schema, onValidatePhoneNumber } from '../../helpers/validation';

const isBrowser = typeof window !== 'undefined';

const Form = ({ clickFrom }) => {
  const [userLocation, setUserLocation] = React.useState('');
  const { t } = useTranslation();
  const data = t('form', { returnObjects: true });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm(
    {
      resolver: yupResolver(schema),
    },
    {
      defaultValues: {
        checkbox: false,
      },
      mode: 'onBlur',
    }
  );

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
      .then(() => alert('Заявка отправлена!'))
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
      className="w-80 m-auto"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        {...register('name')}
        className="w-80 mb-4 p-2"
        placeholder={data.nameInput}
      />
      <p className=" text-red">{errors.name?.message}</p>
      <input
        {...register('email')}
        className="w-80 mb-4 p-2"
        placeholder="E-mail"
      />
      <p className="text-red">{errors.email?.message}</p>
      <Controller
        name="phone"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <PhoneInput
            country={userLocation || 'ua'}
            placeholder="Enter phone number"
            preferredCountries={['ua', 'gb']}
            isValid={onValidatePhoneNumber}
            {...field}
          />
        )}
      />

      <p className=" text-red">{errors.phone?.message}</p>
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <input type="checkbox" {...field} />
            <span>{data.accept}</span>
          </>
        )}
      />
      <p className=" text-red">{errors.checkbox?.message}</p>
      <Button type="submit" className="p-4 border rounded-lg mt-2 ">
        {data.button}
      </Button>
    </form>
  );
};

export default Form;
