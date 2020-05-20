import React from 'react';
import { useForm } from 'react-form-hook';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<FormData>();

  return <p>register</p>;
};

export default RegisterForm;
