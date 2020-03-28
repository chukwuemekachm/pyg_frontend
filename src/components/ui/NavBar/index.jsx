import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from 'Ui/Typography';
import { WHITE, LIGHT_GRAY, BLACK } from 'Styles/colors.styles';
import { handleButtonClick } from 'Utils/misc';

export default function NavBar({ name, handleUserLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar.Wrapper>
      <NavBar.BrandWrapper>
        <Typography type="h1" style={{ fontSize: '1.4rem' }}>PYG Tracker</Typography>
      </NavBar.BrandWrapper>
      <NavBar.NameAndIconWrapper>
        <Typography><strong>{name}</strong></Typography>
        <NavBar.IconWrapper
          aria-label="Expand dropdown"
          aria-expanded={isOpen}
          tabIndex={0}
          role="button"
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          onKeyDown={handleButtonClick(() => setIsOpen(!isOpen))}
        >
          ▼
        </NavBar.IconWrapper>
      </NavBar.NameAndIconWrapper>
      {
        isOpen && (
          <NavBar.DropDown>
            <NavBar.DropDownButton
              onKeyDown={handleButtonClick(handleUserLogout)}
              onClick={handleUserLogout}
              href="#"
            >
              Log out
            </NavBar.DropDownButton>
          </NavBar.DropDown>
        )
      }
    </NavBar.Wrapper>
  );
}

NavBar.Wrapper = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  box-shadow: rgba(153, 153, 153, 0.2) 0px 0.32em 2em;

  @media(max-width: 1024px) {
    padding: 0.5rem 1rem;
  }
`;

NavBar.BrandWrapper = styled.div`
  display: flex;
  align-items: center;
`;

NavBar.IconWrapper = styled.span`
  margin-left: 0.5rem;
  animation: ${({ isOpen }) => `${isOpen ? 'turn-up' : 'turn-down'} 200ms ease-in-out forwards`};

  &:hover {
    cursor: pointer;
  }

  @keyframes turn-up {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes turn-down {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

NavBar.NameAndIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

NavBar.DropDown = styled.div`
  width: 10rem;
  position: absolute;
  right: 2rem;
  top: 5.5rem;
  z-index: 1;
  background-color: ${WHITE};
  transition: opacity 200ms ease-in-out;

  @media(max-width: 1024px) {
    right: 1rem;;
  }
`;

NavBar.DropDownButton = styled.a`
  width: 100%;
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  color: ${BLACK};
  box-shadow: rgba(153, 153, 153, 0.2) 0px 0.32em 2em;

  &:hover {
    background: ${LIGHT_GRAY};
  }
`;

NavBar.propTypes = {
  name: PropTypes.string.isRequired,
  handleUserLogout: PropTypes.func.isRequired,
};
