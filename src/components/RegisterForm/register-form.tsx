import React from 'react';
import { useForm } from 'react-hook-form';
import {
  StyledForm,
  StyledInput,
  StyledHeader,
  StyledFormWrapper,
  StyledButton,
  StyledErrorFlag,
  StyledLabel,
} from './register-form-styles';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName, email, password }) => {
    console.log(firstName, lastName, email, password);
  });

  console.log('email: ', watch('email'));

  return (
    <StyledFormWrapper>
      <StyledHeader>Sign Up</StyledHeader>
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel>First Name</StyledLabel>
        <StyledInput
          name='firstName'
          placeholder='Levi'
          ref={register({ required: true })}
        />
        <StyledLabel>Last Name</StyledLabel>
        <StyledInput
          name='lastName'
          placeholder='Strauss'
          ref={register({ required: true })}
        />
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          name='email'
          type='email'
          placeholder='Levi@livedin.com'
          ref={register({ required: true })}
        />
        <StyledLabel>Password</StyledLabel>
        <StyledInput
          name='password'
          type='password'
          placeholder='•••••••••••'
          ref={register({ required: true })}
        />
        {errors.password && (
          <StyledErrorFlag>password required!</StyledErrorFlag>
        )}
        <StyledButton type='submit'>LET ME IN</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default RegisterForm;
