import * as yup from 'yup';
import {
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from 'libphonenumber-js/max';

export const schema = yup
  .object({
    name: yup
      .string()
      .matches(
        /^[а-яА-ЯёЁa-zA-Z]{1}[а-яА-ЯёЁa-zA-Z ]+$/,
        'Please enter valid name'
      )
      .min(3, 'Name must contain 3 or more letters')
      .max(100, 'Name can not contain more then 100 letters')
      .required('Name is required'),
    email: yup
      .string()
      .email()
      .matches(
        /^[a-zA-Z0-9+_.]+[a-zA-Z0-9+_.-]+@[a-zA-Z0-9_.-]+$/,
        'Please enter valid email'
      )
      .min(10, 'Email must contain 10 or more symbols')
      .max(63, 'Email can not contain more then 63 symbols')
      .required('Email is required'),
    phone: yup
      .string()
      .min(9, 'Phone number must contain at least 8 digits')
      .max(13, 'Phone number cannot contain more than 13 digits')
      .required('Phone number is required'),
    checkbox: yup.boolean().required('You must accept the terms'),
  })
  .required();

export const onValidatePhoneNumber = (value, country) => {
  if (value && value.length > 9) {
    if (isValidPhoneNumber(value, country.iso2.toUpperCase())) {
      return true;
    } else if (
      validatePhoneNumberLength(value, country.iso2.toUpperCase()) ===
      'TOO_SHORT'
    ) {
      return 'Too short number';
      // return (
      //   <p className="absolute -bottom-16 -left-12 w-32">Too short number</p>
      // );
    } else if (
      validatePhoneNumberLength(value, country.iso2.toUpperCase()) ===
      'TOO_LONG'
    ) {
      return 'Too long number';
      // return (
      //   <p className="absolute -bottom-16 -left-12 w-32">Too long number</p>
      // );
    } else {
      return 'Enter correct number';
      // return <p className="absolute -bottom-16 -left-12 w-32"></p>;
    }
  }
};
