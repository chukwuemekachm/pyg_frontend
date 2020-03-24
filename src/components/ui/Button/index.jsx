import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { WHITE, PRIMARY, PRIMARY_HOVER } from 'Styles/colors.styles';
import Spinner from 'Ui/Spinner';

export default function Button({
  children, isLoading, isBlock, handleClick,
}) {
  return (
    <Button.Wrapper
      onClick={handleClick}
      isBlock={isBlock}
    >
      {isLoading ? <Spinner /> : children}
    </Button.Wrapper>
  );
}

Button.Wrapper = styled.button`
  background-color: ${PRIMARY};
  color: ${WHITE};
  font-size: 0.9rem;
  border: none;
  padding: 0.75rem 2.5rem;
  border-radius: 0.1875rem;
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: ${PRIMARY_HOVER};
  }
`;

Button.defaultProps = {
  isLoading: false,
  isBlock: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  isBlock: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};
