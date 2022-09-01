import {
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from 'libphonenumber-js/max';

  export const onValidatePhoneNumber = (value, country) => {
  if (value && value.length > 9) {
    if (isValidPhoneNumber(value, country.iso2.toUpperCase())) {
      return true;
    } else if (
      validatePhoneNumberLength(value, country.iso2.toUpperCase()) ===
      'TOO_SHORT'
    ) {
      return 'Too short number';
    } else if (
      validatePhoneNumberLength(value, country.iso2.toUpperCase()) ===
      'TOO_LONG'
    ) {
      return 'Too long number';
    } else {
      return 'Enter correct number';
    }
  }
};

