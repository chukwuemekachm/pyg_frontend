import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const logoURL = 'https://res.cloudinary.com/dvcaeuvee/image/upload/v1585009015/undraw_data_xmfy.svg';

export default function Logo({ size }) {
  return <Logo.Image size={size} src={logoURL} alt="PYG Tracker Logo" />;
}

Logo.Image = styled.img`
  width: ${({ size }) => (size === 'small' ? '2.2rem' : '20rem')};
  height: ${({ size }) => (size === 'small' ? '2.2rem' : '20rem')};
`;

Logo.defaultProps = {
  size: 'small',
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'normal']),
};
