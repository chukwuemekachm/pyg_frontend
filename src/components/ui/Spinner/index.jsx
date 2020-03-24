import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { WHITE, PRIMARY } from 'Styles/colors.styles';

export default function Spinner({ size }) {
  return <Spinner.Wrapper size={size} />;
}

Spinner.Wrapper = styled.div`
  border: 0.1875rem solid ${WHITE};
  border-top: 0.1875rem solid ${PRIMARY};
  border-right: 0.1875rem solid ${PRIMARY};
  border-radius: 50%;
  width: ${({ size }) => (size === 'small' ? '1.05rem' : '9rem')};
  height: ${({ size }) => (size === 'small' ? '1.05rem' : '9rem')};
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

Spinner.defaultProps = {
  size: 'small',
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
};
