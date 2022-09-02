import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
  Container,
  Divider,
  downwards,
  Error,
  Form,
  Input,
  invisible,
  Logo,
  Message,
  Option,
  Text,
  Title,
  upwards,
  visible,
  Wrapper,
} from './styles';

import { useAuth } from 'hooks';

const formType = {
  signIn: { title: 'Sign In', state: 'signIn' },
  signUp: { title: 'Create Account', state: 'signUp' },
  reset: { title: 'Reset Password', state: 'reset' },
};

export default function Login() {
  const [type, setType] = useState(formType.signIn);
  const [isSwitching, setIsSwitching] = useState(false);

  const {
    error,
    isLoading,
    handleSignUp,
    handleSignIn,
    handleReset,
    handleGoogleAuth,
    handleClearError,
  } = useAuth();

  const {
    watch,
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const options = {
    email: {
      required: 'This field is required.',
      pattern: {
        value:
          // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email address.',
      },
    },

    password: {
      required: 'This field is required.',
      minLength: {
        value: 8,
        message: 'Your password must be at least 8 characters.',
      },
    },

    confirmation: {
      required: 'This field is required.',
      validate: (value) =>
        watch('password') === value
          ? true
          : 'Please make sure your passwords match.',
    },
  };

  const onSubmit = ({ email, password }) => {
    switch (type.state) {
      case formType.signUp.state:
        handleSignUp(email, password);
        break;

      case formType.signIn.state:
        handleSignIn(email, password);
        break;

      case formType.reset.state:
        handleReset(email);
        break;

      default:
        break;
    }
  };

  const handleType = (type) => {
    handleClearError();
    reset();

    setIsSwitching(true);

    setTimeout(() => setIsSwitching(false), 500);

    setTimeout(() => setType(type), 500);
  };

  return (
    <Container>
      <Link to="/">
        <Logo>Myriad</Logo>
      </Link>

      <Wrapper style={isSwitching ? downwards : upwards}>
        <Title>{type.title}</Title>

        {type.state === formType.reset.state && (
          <Text>
            Please enter your email address and we'll send you a link to reset
            your password.
          </Text>
        )}

        {error && type.state === formType.reset.state && (
          <Message>{error}</Message>
        )}

        {error && type.state !== formType.reset.state && (
          <Message type="error">{error}</Message>
        )}

        <Form onSubmit={handleSubmit(onSubmit)}>
          {type.state === formType.signIn.state && (
            <>
              <Input
                type="button"
                value="Sign in with Google"
                onClick={handleGoogleAuth}
              />

              <Divider>
                <span>Or</span>
              </Divider>
            </>
          )}

          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            {...register('email', options.email)}
            style={{ border: errors.email && '2px solid var(--color-red)' }}
          />
          <Error style={errors.email ? visible : invisible}>
            {errors.email ? errors.email.message : <span>&nbsp;</span>}
          </Error>

          {type.state !== formType.reset.state && (
            <>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                {...register('password', options.password)}
                style={{
                  border: errors.password && '2px solid var(--color-red)',
                }}
              />
              <Error style={errors.password ? visible : invisible}>
                {errors.password ? (
                  errors.password.message
                ) : (
                  <span>&nbsp;</span>
                )}
              </Error>
            </>
          )}

          {type.state === formType.signUp.state && (
            <>
              <Input
                type="password"
                name="confirmation"
                placeholder="Confirm Password"
                {...register('confirmation', options.confirmation)}
                style={{
                  border: errors.confirmation && '2px solid var(--color-red)',
                }}
              />
              <Error style={errors.confirmation ? visible : invisible}>
                {errors.confirmation ? (
                  errors.confirmation.message
                ) : (
                  <span>&nbsp;</span>
                )}
              </Error>
            </>
          )}

          <Input
            as="button"
            type="submit"
            formNoValidate
            style={
              isValid
                ? {
                    cursor: isLoading ? 'progress' : 'pointer',

                    background:
                      isLoading &&
                      'linear-gradient(90deg,#7c4dff54 33%,#7c4dff 50%,#7c4dff54 66%)#000',
                    backgroundSize: isLoading && '300% 100%',
                  }
                : {
                    pointerEvents: 'none',
                    opacity: 0.6,
                  }
            }
          >
            {isLoading ? <>&nbsp;</> : 'CONTINUE'}
          </Input>
        </Form>

        {type.state === formType.signIn.state && (
          <Option>
            <button onClick={() => handleType(formType.reset)}>
              Forgot Password?
            </button>
          </Option>
        )}

        <Option>
          {type.state === formType.signUp.state
            ? 'Already have an account?'
            : 'New to Myriad?'}
          &nbsp;
          <button
            onClick={() =>
              handleType(
                type.state === formType.signUp.state
                  ? formType.signIn
                  : formType.signUp
              )
            }
          >
            {type.state === formType.signUp.state ? 'Sign in' : 'Sign up now!'}
          </button>
        </Option>
      </Wrapper>
    </Container>
  );
}
