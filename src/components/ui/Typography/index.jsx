import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  BLACK, GRAY, CRIMSON, WHITE,
} from 'Styles/colors.styles';

function fontSizeChooser({ type }) {
  switch (type) {
    case 'h1':
      return '2.625rem';
    case 'h2':
      return '2.2rem';
    case 'h3':
      return '1rem';
    case 'tag':
      return '0.6rem';
    case 'label':
    case 'error':
      return '1rem';
    default:
      return '1rem;';
  }
}

function colorChooser({ type, color }) {
  if (color) return color;

  switch (type) {
    case 'h1':
      return BLACK;
    case 'h2':
      return WHITE;
    case 'error':
      return CRIMSON;
    default:
      return GRAY;
  }
}

function marginChooser({ type }) {
  switch (type) {
    case 'label':
      return '0 0 0.5rem 0';
    case 'error':
      return '0.5rem 0 0 0';
    case 'tag':
      return '0rem';
    default:
      return '0.5rem';
  }
}

const typographyCSS = css`
  font-size: ${fontSizeChooser};
  color: ${colorChooser};
  margin: ${marginChooser};
`;

export default function Typography(props) {
  const { children, type } = props;
  const typographyMap = {
    h1: 'H1',
    h2: 'H2',
    h3: 'H3',
    p: 'P',
    label: 'Label',
    error: 'Span',
    tag: 'Span',
  };
  const StyledTypography = Typography[typographyMap[type]];

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledTypography {...props} type={type}>{children}</StyledTypography>;
}

Typography.H1 = styled.h1`
  ${typographyCSS}
`;

Typography.H2 = styled.h2`
  ${typographyCSS}
`;

Typography.H3 = styled.h3`
  ${typographyCSS}
`;

Typography.P = styled.p`
  ${typographyCSS}
`;

Typography.Label = styled.label`
  ${typographyCSS}
`;

Typography.Span = styled.span`
  ${typographyCSS}
`;

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'label', 'error', 'tag']),
  color: PropTypes.string,
};

Typography.defaultProps = {
  type: 'p',
  color: '',
};
