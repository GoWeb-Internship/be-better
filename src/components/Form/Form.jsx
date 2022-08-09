import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
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
    checkbox: yup.boolean().required('You must accept the terms'),
  })
  .required();

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
      resolver: yupResolver(schema),
    },
    {
      defaultValues: {
        checkbox: false,
      },
    }
  );

  const GATSBY_TOKEN = process.env.GATSBY_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  const onSubmit = async data => {
    let message = `
    <b>Request information:</b>
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Checkbox: yes

    <b>Additional information:</b>
    <i>TransactionID: 11111111</i>
    <i>BlockID: 22222222</i>
    <i>Form name: contact</i>
    <a href="https://be-better.today">https://be-better.today</a>
    ------
    `;

    const TG_URL = `https://api.telegram.org/bot${GATSBY_TOKEN}/sendMessage`;

    await axios
      .post(TG_URL, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
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
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <input type="checkbox" {...field} />
            <span>Accept</span>
          </>
        )}
      />
      <p>{errors.checkbox?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default Form;
