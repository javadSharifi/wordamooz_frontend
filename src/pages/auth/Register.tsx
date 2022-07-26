import DividingLine from 'components/auth/DividingLine';
import BtnGoogle from 'components/auth/GoogleOAuth';
import RegisterForms from 'components/auth/RegisterForms';
import { authContext } from 'context/AuthContext';
import { Formik } from 'formik';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '../../components/auth/form';
import Title from '../../components/auth/Title';
import useRegister from '../../services/auth/register';

type TData = {
  email: string;
  name: string;
  password: string;
};

function Register() {
  const [auth, setAuth] = useContext(authContext);
  const { mutate } = useRegister();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('email is required'),
    name: Yup.string().required('name is required'),
    password: Yup.string()
      .required('password is required')
      .min(6, 'password must be at least 6 characters')
      .max(20, 'password must be less than 20 characters'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async ({ email, name, password }, { setErrors }) => {
        mutate(
          { email, name, password, password_confirmation: password },
          {
            onSuccess({ data }) {
              toast.success('register is success');
              setAuth({ ...auth, loading: true, id: data.data.id });
            },
            onError(e: any) {
              toast.error(`${setErrors(e.response.data.errors)}`);
            },
          }
        );
      }}
      initialValues={
        {
          email: '',
          name: '',
          password: '',
        } as TData
      }
    >
      {() => (
        <Form className="flex flex-col items-center justify-center">
          <Title />
          <BtnGoogle />
          <DividingLine />
          <RegisterForms />
          <Link to={'/auth/login'} className="mt-3 text-xl  text-cyan-600">
            I have account
          </Link>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
