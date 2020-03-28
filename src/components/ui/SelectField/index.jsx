import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DARK_GRAY, BLACK, WHITE } from 'Styles/colors.styles';
import Typography from 'Ui/Typography';

export default function SelectField({
  options, label, placeHolder, value, error, name, handleChange, handleBlur,
}) {
  return (
    <SelectField.Wrapper>
      {
        label && (
          <Typography type="label" htmlFor={`${name}-field`} id={`${name}-label`}>
            {label}
          </Typography>
        )
      }
      <SelectField.InputWrapper>
        <SelectField.Input
          placeholder={placeHolder}
          value={value}
          name={name}
          id={`${name}-field`}
          data-testid={`${name}-field`}
          aria-labelledby={`${name}-label`}
          aria-describedby={`${name}-error`}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {
            options.map((option) => (
              <SelectField.Option value={option} key={option}>{option}</SelectField.Option>
            ))
          }
        </SelectField.Input>
      </SelectField.InputWrapper>
      {
        Array.isArray(error) && error[0] && error.map((feedback) => (
          <Typography key={feedback} id={`${name}-error`} type="error" aria-label="Error: ">
            {feedback}
          </Typography>
        ))
      }
    </SelectField.Wrapper>
  );
}

SelectField.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

SelectField.Input = styled.select`
  font-size: 1rem;
  height: 2.91725625rem;
  width: 100%;
  border: none;
  color: ${BLACK};
  background: ${WHITE};
`;

SelectField.InputWrapper = styled.span`
  border-radius: 2px;
  border: 1px solid ${DARK_GRAY};
`;

SelectField.Option = styled.option``;

SelectField.defaultProps = {
  label: '',
  placeHolder: '',
  error: [],
};

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
