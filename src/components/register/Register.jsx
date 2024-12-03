// Code for the Register component
import { Link } from "react-router-dom";
import {Formik, Form as FormikForm, Field, ErrorMessage} from 'formik'
import { registerInitialValues} from '../../formik/initialValues'
import { registerValidationSchema } from '../../formik/validationSchema'
import {createUser} from '../../axios/auth'
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Registro</h2>
        <p className="text-gray-600 mb-6">Crea una nueva cuenta</p>
        <Formik
         initialValues={registerInitialValues} // Initial values
         validationSchema={registerValidationSchema} // Validation schema
         onSubmit={async (values, actions) =>{
           //Llamada a la API para crear el usuario con los datos del formulario
            const user = await createUser(values.email, values.password);
            actions.resetForm();
            // Si la respuesta es exitosa, redirigir al usuario a la página de inicio de sesión
          if (user) {
            navigate("/login");
          }
         }} 
      >
        <FormikForm  className="space-y-6" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Registrarse
          </button>
        </FormikForm>
        </Formik>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          ¿Ya tienes una cuenta?{' '}

          <Link to="/login" className="text-blue-600 hover:underline">
              Sign In
              
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register