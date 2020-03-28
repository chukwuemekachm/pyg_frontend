import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import DateTimePicker from 'react-datepicker';


import { DARK_GRAY, BLACK, WHITE } from 'Styles/colors.styles';
import Typography from 'Ui/Typography';

export default function DatePicker({
  label, error, name, handleDateChange, handleBlur, value,
}) {
  return (
    <DatePicker.Wrapper>
      {
        label && (
          <Typography type="label" htmlFor={`${name}-field`} id={`${name}-label`}>
            {label}
          </Typography>
        )
      }
      <DatePicker.InputWrapper>
        <DateTimePicker
          data-enable-time
          id={`${name}-field`}
          data-testid={`${name}-field`}
          aria-labelledby={`${name}-label`}
          aria-describedby={`${name}-error`}
          name={name}
          value={String(value)}
          dateFormat="MM/dd/yyyy"
          onBlur={handleBlur}
          onChange={handleDateChange}
        />
      </DatePicker.InputWrapper>
      {
        Array.isArray(error) && error[0] && error.map((feedback) => (
          <Typography key={feedback} id={`${name}-error`} type="error" aria-label="Error: ">
            {feedback}
          </Typography>
        ))
      }
    </DatePicker.Wrapper>
  );
}

DatePicker.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

DatePicker.InputWrapper = styled.div`
  background: ${WHITE};
  border-radius: 2px;
  border: 1px solid ${DARK_GRAY};

  input {
    padding: 0.8rem;
    font-size: 1rem;
    height: 2.71725625rem;
    width: 100%;
    border: none;
    color: ${BLACK};
  }
`;

DatePicker.defaultProps = {
  label: '',
  error: [],
};

DatePicker.propTypes = {
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  name: PropTypes.string.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
