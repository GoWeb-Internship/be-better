import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;

const schema = yup
  .object({
    name: yup.string(),
    email: yup
      .string()
      .email()
      .matches(
        /^[a-zA-Z0-9+_.]+[a-zA-Z0-9+_.-]+@[a-zA-Z0-9_.-]+$/,
        'Please enter valid email'
      )
      .required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegEx, 'Enter valid number')
      .required('Phone is required'),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    const TOKEN = '5494380827:AAEulxKlPigRCbJkIixI2HmtsnEOSaXoTyg';
    const CHAT_ID = '-616555921';
    const message = `Вы получили новую заявку! Отправитель: ${data.name}, email: ${data.email}, номер телефона:${data.phone}`;

    const TG_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`;

    fetch(TG_URL, {
      method: 'POST',
    })
      .then(() => alert('Заявка отправлена!'))
      .catch(error => alert(error));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact-test"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-test" />
      <input
        {...register('name')}
        className="mb-4 p-2"
        placeholder="Enter your name"
      />
      <p>{errors.name?.message}</p>
      <input
        {...register('email')}
        className="mb-4 p-2"
        placeholder="Enter your email"
      />
      <p>{errors.email?.message}</p>
      <input
        {...register('phone')}
        className="mb-4 p-2"
        placeholder="Enter your number"
      />
      <p>{errors.phone?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default Form;
