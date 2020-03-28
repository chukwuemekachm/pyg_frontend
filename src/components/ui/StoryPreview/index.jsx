import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import Typography from 'Ui/Typography';
import StoryTag from 'Ui/StoryTag';
import Button from 'Ui/Button';
import ViewAccessControl from 'Helpers/ViewAccessControl';
import SelectField from 'Ui/SelectField';
import Form from 'Ui/Form';
import { LIGHT_GRAY, BLACK } from 'Styles/colors.styles';
import {
  modalIDs, storyFormAction, userRoles, storyStatus,
} from 'Utils/constants';
import { PROCESS_STORY_VALIDATION_SCHEMA } from 'lib/validator';

function StoryPreview(props) {
  const {
    summary, description, type, status, complexity, processStoryRequest, estimatedCompletionTime,
    handleOpenModal, userRole, userInfo, createdAt, formError, isLoading, cost,
  } = props;

  return (
    <StoryPreview.Wrapper>
      <StoryPreview.MainWrapper>
        <Typography type="h2" color={BLACK}>{summary}</Typography>
        <Typography>{description}</Typography>
        <Button
          handleClick={() => handleOpenModal({
            modalId: modalIDs.STORY_FORM,
            props: { action: storyFormAction.UPDATE },
          })}
        >
          Edit
        </Button>
      </StoryPreview.MainWrapper>
      <StoryPreview.MetaWrapper>
        <StoryPreview.MetaInfoWrapper>
          <Typography type="tag" style={{ fontWeight: '900' }}>TYPE</Typography>
          <StoryTag type={type} />
        </StoryPreview.MetaInfoWrapper>
        <StoryPreview.MetaInfoWrapper>
          <Typography type="tag" style={{ fontWeight: '900' }}>STATUS</Typography>
          <Typography>{status}</Typography>
        </StoryPreview.MetaInfoWrapper>
        <StoryPreview.MetaInfoWrapper>
          <Typography type="tag" style={{ fontWeight: '900' }}>COMPLEXITY</Typography>
          <Typography>{complexity}</Typography>
        </StoryPreview.MetaInfoWrapper>
        <StoryPreview.MetaInfoWrapper>
          <Typography type="tag" style={{ fontWeight: '900' }}>ESTIMATED COMPLETION TIME</Typography>
          <Typography>{moment(estimatedCompletionTime).fromNow()}</Typography>
        </StoryPreview.MetaInfoWrapper>
        <StoryPreview.MetaInfoWrapper>
          <Typography type="tag" style={{ fontWeight: '900' }}>COST</Typography>
          <Typography>{`$${parseFloat(cost)}`}</Typography>
        </StoryPreview.MetaInfoWrapper>
        <StoryPreview.MetaInfoWrapper>
          <Typography type="tag" style={{ fontWeight: '900' }}>
            CREATED
          </Typography>
          <Typography>{moment(createdAt).fromNow()}</Typography>
        </StoryPreview.MetaInfoWrapper>
        <Button
          handleClick={() => handleOpenModal({
            modalId: modalIDs.STORY_FORM,
            props: { action: storyFormAction.CREATE },
          })}
        >
          Create New Story
        </Button>
        {
          userInfo && userInfo.firstName && (
            <ViewAccessControl allowedRoles={[userRoles.ADMIN]} userRole={userRole}>
              <StoryPreview.UserInfoWrapper>
                <Typography type="h3">User Info</Typography>
                <StoryPreview.MetaInfoWrapper>
                  <Typography type="tag" style={{ fontWeight: '900' }}>FIRST NAME</Typography>
                  <Typography>{userInfo.firstName}</Typography>
                </StoryPreview.MetaInfoWrapper>
                <StoryPreview.MetaInfoWrapper>
                  <Typography type="tag" style={{ fontWeight: '900' }}>LAST NAME</Typography>
                  <Typography>{userInfo.lastName}</Typography>
                </StoryPreview.MetaInfoWrapper>
                <StoryPreview.MetaInfoWrapper>
                  <Typography type="tag" style={{ fontWeight: '900' }}>EMAIL</Typography>
                  <Typography>{userInfo.email}</Typography>
                </StoryPreview.MetaInfoWrapper>
              </StoryPreview.UserInfoWrapper>
            </ViewAccessControl>
          )
        }
        <ViewAccessControl allowedRoles={[userRoles.ADMIN]} userRole={userRole}>
          <StoryPreview.UserInfoWrapper>
            <Typography type="h3">Process Story</Typography>
            <Form
              handleSubmit={processStoryRequest}
              defaultValues={{ status }}
              validationSchemaKey={PROCESS_STORY_VALIDATION_SCHEMA}
              formError={formError}
            >
              {({
                handleChange, handleBlur, values, errors, handleFormSubmit,
              }) => (
                <StoryPreview.FormWrapper>
                  <SelectField
                    name="status"
                    value={values.status}
                    label="Status"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors.status}
                    options={Object.values(storyStatus)}
                  />
                  <Button isLoading={isLoading} handleClick={handleFormSubmit}>Update</Button>
                </StoryPreview.FormWrapper>
              )}
            </Form>
          </StoryPreview.UserInfoWrapper>
        </ViewAccessControl>
      </StoryPreview.MetaWrapper>
    </StoryPreview.Wrapper>
  );
}

StoryPreview.Wrapper = styled.section`
  padding: 0.5rem 2rem;
  display: flex;
  height: 100%;

  @media(max-width: 1024px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

StoryPreview.HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

StoryPreview.MainWrapper = styled.div`
  width: 70%;
  height: 100%;
  border-right: 0.03125rem solid ${LIGHT_GRAY};
  overflow-y: auto;

  @media(max-width: 1024px) {
    width: 100%;
    border-bottom: 0.03125rem solid ${LIGHT_GRAY};
    border-right: none;
    padding-bottom: 1rem;
  }
`;

StoryPreview.MetaWrapper = styled.div`
  width: 30%;
  padding: 0.5rem 1rem;
  height: 100%;
  overflow-y: auto;

  @media(max-width: 1024px) {
    width: 100%;
    overflow-y: hidden;
  }
`;

StoryPreview.MetaInfoWrapper = styled.div`
  margin-bottom: 1rem;
`;

StoryPreview.UserInfoWrapper = styled.div`
  margin-top: 2.5rem;
`;

StoryPreview.FormWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

StoryPreview.propTypes = {
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  complexity: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  estimatedCompletionTime: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
  userInfo: PropTypes.oneOfType([
    PropTypes.string, PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }),
  ]).isRequired,
  processStoryRequest: PropTypes.func.isRequired,
  formError: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ story }) => ({
  userInfo: story.selectedStory.createdBy,
  createdAt: story.selectedStory.createdAt,
  estimatedCompletionTime: story.selectedStory.estimatedCompletionTime,
  cost: story.selectedStory.cost,
  formError: story.error.message,
  isLoading: story.status.isLoading,
});

export default connect(mapStateToProps, null)(StoryPreview);
