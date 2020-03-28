import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import Typography from 'Ui/Typography';
import StoryTag from 'Ui/StoryTag';
import {
  ALICE_BLUE, ALICE_BLUE_HOVER, LIGHT_GRAY, PRIMARY,
} from 'Styles/colors.styles';
import { handleButtonClick } from 'Utils/misc';

export default function StoryCard(props) {
  const {
    summary, type, createdAt, handleClick, isActive,
  } = props;

  return (
    <StoryCard.Wrapper
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleButtonClick(handleClick)}
      className={`${isActive && 'active'}`}
    >
      <StoryTag type={type} />
      <StoryCard.SummaryWrapper>
        <Typography type="h3">{summary}</Typography>
      </StoryCard.SummaryWrapper>
      <Typography type="tag" style={{ textAlign: 'right', display: 'block' }}>
        {moment(createdAt).fromNow()}
      </Typography>
    </StoryCard.Wrapper>
  );
}

StoryCard.Wrapper = styled.article`
  width: 100%;
  padding: 1rem 1rem 0.5rem 0rem;
  background: ${ALICE_BLUE};
  border-bottom: 0.03125rem solid ${LIGHT_GRAY};
  border-right: 0.1rem solid transparent;
  border-left: 1rem solid transparent;

  &.active,
  &:hover {
    background: ${ALICE_BLUE_HOVER};
    cursor: pointer;
    border-right: 0.1rem solid ${PRIMARY};
  }

  &:last-child {
    border-bottom: 0.03125rem solid transparent;
  }
`;

StoryCard.SummaryWrapper = styled.div`
  margin: 0.75rem 0;
`;

StoryCard.propTypes = {
  summary: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
