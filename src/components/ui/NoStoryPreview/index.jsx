import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from 'Ui/Typography';
import Button from 'Ui/Button';
import Logo from 'Ui/Logo';
import { BLACK } from 'Styles/colors.styles';
import { modalIDs, storyFormAction } from 'Utils/constants';

function NoStoryPreview({ handleOpenModal }) {
  return (
    <NoStoryPreview.Wrapper>
      <Logo size="normal" />
      <Typography type="h2" color={BLACK}>Track your project and much more in one place.</Typography>
      <Typography type="p">Select a user story or create a new one to get going.</Typography>
      <NoStoryPreview.ButtonWrapper>
        <Button
          handleClick={() => handleOpenModal({
            modalId: modalIDs.STORY_FORM,
            props: { action: storyFormAction.CREATE },
          })}
        >
          Create New Story
        </Button>
      </NoStoryPreview.ButtonWrapper>
    </NoStoryPreview.Wrapper>
  );
}

NoStoryPreview.Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 1024px) {
    padding: 2rem;
  }
`;

NoStoryPreview.ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

NoStoryPreview.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
};

export default memo(NoStoryPreview);
