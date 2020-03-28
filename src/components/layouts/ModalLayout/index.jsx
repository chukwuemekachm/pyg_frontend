import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from 'Ui/Typography';
import { SNOW, LIGHT_GRAY } from 'Styles/colors.styles';
import { handleButtonClick } from 'Utils/misc';

export default function ModalLayout({ title, handleClose, children }) {
  return (
    <ModalLayout.Wrapper>
      <ModalLayout.Content>
        <ModalLayout.Header>
          <Typography type="p">{title}</Typography>
          <ModalLayout.CloseWrapper
            aria-label="Close modal icon"
            tabIndex={0}
            role="button"
            onClick={handleClose}
            onKeyDown={handleButtonClick(handleClose)}
          >
            &times;
          </ModalLayout.CloseWrapper>
        </ModalLayout.Header>
        <ModalLayout.Body>
          {children}
        </ModalLayout.Body>
      </ModalLayout.Content>
    </ModalLayout.Wrapper>
  );
}

ModalLayout.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
  transition: opacity 2s ease-in-out;
`;

ModalLayout.CloseWrapper = styled.span`
  font-size: 2.5rem;
  margin-bottom: 0.2rem;

  &:hover {
    cursor: pointer;
  }
`;

ModalLayout.Content = styled.section`
  width: 40%;
  height: auto;
  background-color: ${SNOW};
  box-shadow: rgba(153, 153, 153, 0.2) 0px 0.32em 2em;
  border-radius: 2px;

  @media(max-width: 1024px) {
    width: 90%;
    overflow-y: auto;
  }
`;

ModalLayout.Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${LIGHT_GRAY};
  padding: 0.5rem 0.5rem 0 0.5rem;
`;

ModalLayout.Body = styled.main`
  width: 100%;
  padding: 2rem;
`;

ModalLayout.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
