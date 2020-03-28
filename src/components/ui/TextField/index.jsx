import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DARK_GRAY, BLACK } from 'Styles/colors.styles';
import Typography from 'Ui/Typography';

export default function TextField({
  label, placeHolder, value, error, name, handleChange, handleBlur,
}) {
  return (
    <TextField.Wrapper>
      {
        label && (
          <Typography type="label" htmlFor={`${name}-field`} id={`${name}-label`}>
            {label}
          </Typography>
        )
      }
      <TextField.Input
        placeholder={placeHolder}
        value={value}
        name={name}
        id={`${name}-field`}
        data-testid={`${name}-field`}
        aria-labelledby={`${name}-label`}
        aria-describedby={`${name}-error`}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {
        Array.isArray(error) && error[0] && error.map((feedback) => (
          <Typography key={feedback} id={`${name}-error`} type="error" aria-label="Error: ">
            {feedback}
          </Typography>
        ))
      }
    </TextField.Wrapper>
  );
}

TextField.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

TextField.Input = styled.textarea`
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.1875rem;
  border: 1px solid ${DARK_GRAY};
  color: ${BLACK};
  height: 8rem;
`;

TextField.defaultProps = {
  label: '',
  placeHolder: '',
  error: [],
};

TextField.propTypes = {
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
