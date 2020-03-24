import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import validatePayload from 'Lib/validator';
import Typography from 'Ui/Typography';

export default function Form(props) {
  const {
    handleSubmit,
    handleInputBlur,
    children,
    validationSchemaKey,
    defaultValues = {},
    formError,
  } = props;
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const {
      target: { value, name },
    } = event;
    setValues({ ...values, [name]: value });
  }

  async function handleBlur({ target: { value, name } }) {
    let newErrors;
    if (value && validationSchemaKey) {
      newErrors = await validatePayload(values, validationSchemaKey);
    }
    setErrors({ ...errors, [name]: newErrors ? newErrors[name] : [] });
    if (handleInputBlur) handleInputBlur();
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (validationSchemaKey) {
      const submitErrors = await validatePayload(values, validationSchemaKey);
      if (submitErrors) {
        return setErrors(submitErrors);
      }
    }
    return handleSubmit(values);
  }

  function composeProps() {
    return {
      values,
      errors,
      handleChange,
      handleBlur,
      handleFormSubmit,
    };
  }

  return (
    <Form.Wrapper onSubmit={handleFormSubmit} aria-describedby="form-error">
      {children(composeProps())}
      {
        formError && (
          <Form.ErrorWrapper>
            <Typography id="form-error" type="error">{formError}</Typography>
          </Form.ErrorWrapper>
        )
      }
    </Form.Wrapper>
  );
}

Form.Wrapper = styled.form`
  width: 100%;
`;

Form.ErrorWrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

Form.defaultProps = {
  handleInputBlur: () => null,
  validationSchemaKey: '',
  defaultValues: {},
  formError: '',
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputBlur: PropTypes.func,
  children: PropTypes.func.isRequired,
  validationSchemaKey: PropTypes.string,
  defaultValues: PropTypes.shape({}),
  formError: PropTypes.string,
};
