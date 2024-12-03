//Formik para manejar el formulario de inicio de sesión
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';

//Axios
import { loginUser } from '../../axios/auth';

//React
import { useState } from 'react';

//Redux
import { useDispatch } from "react-redux";

//React Router
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { setCurrentUser } from "../../redux/user/userSlice";

const Login = () => {

  const [loginError, setLoginError] = useState(''); // Estado para manejar el mensaje de error
  const dispatch = useDispatch(); // Hook para despachar acciones de Redux
  const navigate = useNavigate(); // Hook para navegar entre rutas

  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl mt-6 h-screen">
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <img src='https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80' alt="" />
      </div>
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <p className="mt-3 text-xl text-center text-gray-600 ">
          Welcome back!
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <p href="#" className="text-xs text-center text-gray-500 uppercase hover:underline">Login with email</p>
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
        </div>
        <Formik
          initialValues={loginInitialValues} // Valores iniciales del formulario
          validationSchema={loginValidationSchema} // Validación de los campos del formulario
          // Función que se ejecuta al enviar el formulario
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const user = await loginUser(values.email, values.password); // Llamada a la API para iniciar sesión

              // Si la respuesta es exitosa, guardar el usuario en el estado global y redirigir al usuario a la página principal
              if (user) {
                dispatch(setCurrentUser({
                  ...user,
                }));
            
                navigate('/');
              }
            } catch (error) {
              // Si la respuesta es un error, mostrar el mensaje de error
              setLoginError(error.message);
            } finally {
              // Desactivar el indicador de carga
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">Email Address</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                  <a href="#" className="text-xs text-gray-500 hover:underline">Forget Password?</a>
                </div>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign In
                </button>
                {loginError && <p className="text-red-500 text-sm mt-1">{loginError}</p>}
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <Link to="/register" className="text-xs text-gray-500 uppercase hover:underline">
                  or sign up
                </Link>
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              </div>
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;