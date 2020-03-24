import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { withAuthenticationLayout } from 'Layouts/AuthenticationLayout';
import Typography from 'Ui/Typography';
import InputField from 'Ui/InputField';
import Button from 'Ui/Button';
import SEO from 'Helpers/SEO';
import Form from 'Ui/Form';
import { LOGIN_VALIDATION_SCHEMA } from 'lib/validator';
import { loginUser } from 'Store/actions/user';

const defaultValues = {
  email: '',
  password: '',
};

function LoginPage(props) {
  const {
    loginRequest, isAuthenticated, isLoading, formError, pushPage,
  } = props;

  if (isAuthenticated) {
    pushPage('/');
  }

  return (
    <LoginPage.Wrapper>
      <SEO title="Login" />
      <Typography type="p">Login to your account</Typography>
      <LoginPage.Header>
        <Typography type="h1" style={{ fontSize: '2rem' }}>PYG Tracker</Typography>
      </LoginPage.Header>
      <Form
        handleSubmit={loginRequest}
        defaultValues={defaultValues}
        validationSchemaKey={LOGIN_VALIDATION_SCHEMA}
        formError={formError}
      >
        {({
          handleChange, handleBlur, values, errors, handleFormSubmit,
        }) => (
          <LoginPage.FormWrapper>
            <InputField
              name="email"
              type="email"
              value={values.email}
              label="Email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.email}
            />
            <InputField
              name="password"
              type="password"
              value={values.password}
              label="Password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.password}
            />
            <LoginPage.ButtonWrapper>
              <Button isLoading={isLoading} isBlock handleClick={handleFormSubmit}>Login</Button>
            </LoginPage.ButtonWrapper>
          </LoginPage.FormWrapper>
        )}
      </Form>
    </LoginPage.Wrapper>
  );
}

LoginPage.Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

LoginPage.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

LoginPage.FormWrapper = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 60%;

  @media(max-width: 1024px) {
    width: 80%;
  }
`;

LoginPage.ButtonWrapper = styled.div`
  margin-top: 1.2rem;
`;

LoginPage.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  formError: PropTypes.string.isRequired,
  pushPage: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.status.isAuthenticated,
  isLoading: user.status.isLoading,
  formError: user.error.message,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(loginUser(payload)),
  pushPage: (page) => dispatch(push(page)),
});

export default withAuthenticationLayout(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
