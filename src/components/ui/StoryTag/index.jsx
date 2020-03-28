import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from 'Ui/Typography';
import { WHITE } from 'Styles/colors.styles';
import { storyTypeColors } from 'Utils/constants';

export default function StoryTag({ type }) {
  return (
    <StoryTag.Wrapper background={storyTypeColors[type]}>
      <Typography type="tag" color={WHITE}>{type}</Typography>
    </StoryTag.Wrapper>
  );
}

StoryTag.Wrapper = styled.span`
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  background-color: ${({ background }) => background};
`;

StoryTag.propTypes = {
  type: PropTypes.string.isRequired,
};
