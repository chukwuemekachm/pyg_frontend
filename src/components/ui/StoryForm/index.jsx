import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalLayout from 'Layouts/ModalLayout';
import InputField from 'Ui/InputField';
import SelectField from 'Ui/SelectField';
import TextField from 'Ui/TextField';
import DatePicker from 'Ui/DatePicker';
import Button from 'Ui/Button';
import Form from 'Ui/Form';
import { STORY_VALIDATION_SCHEMA } from 'lib/validator';
import { createStory, updateStory } from 'Store/actions/story';
import { closeModal } from 'Store/actions/modal';
import { storyComplexity, storyType, storyFormAction } from 'Utils/constants';

const defaultValues = {
  summary: '',
  description: '',
  cost: 0,
  estimatedCompletionTime: '',
  complexity: storyComplexity.SMALL,
  type: storyType.DEVELOPMENT,
};

function StoryForm(props) {
  const {
    createStoryRequest, updateStoryRequest, isLoading,
    formError, modalProps, handleCloseModal, selectedStory,
  } = props;

  async function handleSubmit(payload) {
    if (modalProps.action === storyFormAction.CREATE) {
      await createStoryRequest(payload);
      return handleCloseModal();
    }
    await updateStoryRequest(payload);
    return handleCloseModal();
  }

  return (
    <StoryForm.Wrapper>
      <ModalLayout
        title={
          modalProps.action === storyFormAction.CREATE
            ? 'Create New Story'
            : 'Update Story'
        }
        handleClose={handleCloseModal}
      >
        <Form
          handleSubmit={handleSubmit}
          defaultValues={
            modalProps.action === storyFormAction.CREATE ? defaultValues : selectedStory
          }
          validationSchemaKey={STORY_VALIDATION_SCHEMA}
          formError={formError}
        >
          {({
            handleChange, handleBlur, values, errors, handleFormSubmit, handleDateChange,
          }) => (
            <StoryForm.FormWrapper>
              <InputField
                name="summary"
                type="text"
                value={values.summary}
                label="Summary"
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.summary}
              />
              <StoryForm.InputRow>
                <StoryForm.InputWrapper>
                  <DatePicker
                    label="Estimated completion time"
                    handleDateChange={handleDateChange}
                    name="estimatedCompletionTime"
                    error={errors.estimatedCompletionTime}
                    handleBlur={handleBlur}
                    value={values.estimatedCompletionTime}
                  />
                </StoryForm.InputWrapper>
                <StoryForm.InputWrapper>
                  <InputField
                    name="cost"
                    type="number"
                    value={values.cost}
                    label="Cost"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors.cost}
                  />
                </StoryForm.InputWrapper>
              </StoryForm.InputRow>
              <StoryForm.InputRow>
                <StoryForm.InputWrapper>
                  <SelectField
                    name="complexity"
                    value={values.complexity}
                    label="Complexity"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors.complexity}
                    options={Object.values(storyComplexity)}
                  />
                </StoryForm.InputWrapper>
                <StoryForm.InputWrapper>
                  <SelectField
                    name="type"
                    value={values.type}
                    label="Type"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors.type}
                    options={Object.values(storyType)}
                  />
                </StoryForm.InputWrapper>
              </StoryForm.InputRow>
              <TextField
                name="description"
                value={values.description}
                label="Description"
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.description}
              />
              <StoryForm.ButtonWrapper>
                <Button isLoading={isLoading} isBlock handleClick={handleFormSubmit}>
                  {
                    modalProps.action === storyFormAction.CREATE ? 'Create Story' : 'Update Story'
                  }
                </Button>
              </StoryForm.ButtonWrapper>
            </StoryForm.FormWrapper>
          )}
        </Form>
      </ModalLayout>
    </StoryForm.Wrapper>
  );
}

StoryForm.Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

StoryForm.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

StoryForm.FormWrapper = styled.div`
  margin: auto;
  width: 90%;

  @media(max-width: 1024px) {
    width: 95%;
    overflow-y: auto;
  }
`;

StoryForm.ButtonWrapper = styled.div`
  margin-top: 1.2rem;
`;

StoryForm.InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media(max-width: 1024px) {
    flex-direction: column;
  }
`;

StoryForm.InputWrapper = styled.div`
  display: inline-block;
  width: 48%;

  @media(max-width: 1024px) {
    width: 100%;
  }
`;

StoryForm.propTypes = {
  createStoryRequest: PropTypes.func.isRequired,
  updateStoryRequest: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  formError: PropTypes.string.isRequired,
  modalProps: PropTypes.shape({
    action: PropTypes.string,
  }).isRequired,
  selectedStory: PropTypes.shape({}),
};

StoryForm.defaultProps = {
  selectedStory: null,
};

const mapStateToProps = ({ story, modal }) => ({
  isLoading: story.status.isLoading,
  formError: story.error.message,
  selectedStory: story.selectedStory,
  modalProps: modal.props,
});

const mapDispatchToProps = (dispatch) => ({
  createStoryRequest: (payload) => dispatch(createStory(payload)),
  updateStoryRequest: (payload) => dispatch(updateStory(payload)),
  handleCloseModal: (payload) => dispatch(closeModal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
