import * as yup from 'yup';
import {regexPhone} from './func';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
});

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .required('Please enter your phone number')
    .matches(
      regexPhone,
      'Phone number must be a number or a number with digits separated by spaces and underscores',
    ),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
  confirmPassword: yup
    .string()
    .required('Please enter your password')
    .oneOf([yup.ref('password')], 'Password not entered or invalid'),
});

export {loginSchema, registerSchema};
