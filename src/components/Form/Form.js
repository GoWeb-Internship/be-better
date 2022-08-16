import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from '../reusableComponents/Button';
import { checkbox, check } from './Form.module.css';
import locationApi from '../../services/locationApi';
import sendMessageToTg from '../../services/telegramApi';
import { schema, onValidatePhoneNumber } from '../../helpers/validation';
// import { FaSearch } from 'react-icons/fa';

const isBrowser = typeof window !== 'undefined';

const Form = ({ title, seeYou = '', clickFrom }) => {
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
    <section>
      <h2>{title}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="w-[324px] m-auto"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          {...register('name')}
          className="w-full mb-3 pl-8 py-3 rounded-full shadow-inner outline-none"
          placeholder={data.nameInput}
        />
        <p className=" text-red">{errors.name?.message}</p>
        <input
          {...register('email')}
          className="w-full mb-3 pl-8 py-3 rounded-full shadow-inner outline-none"
          placeholder="E-mail"
        />
        <p className="text-red">{errors.email?.message}</p>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <PhoneInput
                country={userLocation || 'ua'}
                placeholder="Enter phone number"
                preferredCountries={['ua', 'gb']}
                enableSearch="true"
                searchPlaceholder="Choose country"
                disableSearchIcon="true"
                isValid={onValidatePhoneNumber}
                containerClass={'outline-none'}
                buttonClass={
                  '!pl-6 !rounded-l-full !border-hidden !bg-transparent'
                }
                inputClass={
                  '!pl-[72px] !h-11 !border-hidden !w-full !rounded-full shadow-inner '
                }
                dropdownClass={
                  '!pl-8 text-left !rounded-2xl snap-start [&::-webkit-scrollbar]:w-4 [&::-webkit-scrollbar]:bg-[#e4eaeb] [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:h-2 [&::-webkit-scrollbar-thumb]:bg-purple'
                }
                searchClass={
                  '!w-full !pl-0 !ml-0 !border-x-transparent !border-t-transparent !border-b-[#00A5CC]'
                }
                {...field}
              />
              {/* <FaSearch className="" /> */}
            </>
          )}
        />
        <p className=" text-red">{errors.phone?.message}</p>
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <label className="flex items-center mt-1 mb-3 pl-2 py-1">
              <input className={checkbox} type="checkbox" {...field} />
              <span className={check}></span>
              <span className="ml-2	text-[8px] text-black">{data.accept}</span>
            </label>
          )}
        />
        <p className=" text-red">{errors.checkbox?.message}</p>
        <Button
          type="submit"
          className="h-12	w-full border rounded-full bg-purple text-white text-lg font-semibold"
        >
          {data.button}
        </Button>
      </form>
      <p>{seeYou}</p>
    </section>
  );
};

export default Form;
