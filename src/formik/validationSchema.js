import * as Yup from 'yup';
import {regEmail} from '../utils/regEmail'

// Validación de los campos del formulario
export const registerValidationSchema = Yup.object({
    email: Yup.string()
      .matches(regEmail, 'Mail no válido')
      .required('Campo requerido'),
    password: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .max(20, 'Máximo 20 caracteres')
      .required('Campo requerido'),
  });

  // Validación de los campos del formulario
  export const loginValidationSchema = Yup.object({
    email: Yup.string()
      .matches(regEmail, 'Mail no válido')
      .required('Campo requerido'),
    password: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .max(20, 'Máximo 20 caracteres')
      .required('Campo requerido'),
  });