import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DashboardLayout from 'Layouts/DashboardLayout';
import { logoutUser } from 'Store/actions/user';
import { fetchStories, selectStoryPreview, processStory } from 'Store/actions/story';
import { openModal } from 'Store/actions/modal';
import StoryCard from 'Ui/StoryCard';
import { SNOW } from 'Styles/colors.styles';
import NoStoryPreview from 'Ui/NoStoryPreview';
import Modal from 'Helpers/Modal';
import SuspenseFallBack from 'Ui/SuspenseFallBack';

const StoryPreview = lazy(() => import(/* webpackChunkName: "StoryPreview" */ 'Ui/StoryPreview'));
const StoryForm = lazy(() => import(/* webpackChunkName: "StoryForm" */ 'Ui/StoryForm'));

function DashboardPage(props) {
  const {
    isAuthenticated, userProfile, stories, selectedStory, processStoryRequest,
    pushPage, logout, fetchStoriesRequest, previewStory, handleOpenModal,
  } = props;

  if (!isAuthenticated) {
    pushPage('/login');
  }

  useEffect(() => {
    fetchStoriesRequest();
  }, []);

  return (
    <DashboardLayout name={`${userProfile.firstName} ${userProfile.lastName}`} handleUserLogout={logout}>
      <DashboardPage.Wrapper>
        <DashboardPage.StoryCardWrapper hasStories={Boolean(stories.length)}>
          {stories.map(({
            id, summary, type, createdAt,
          }) => (
            <StoryCard
              key={id}
              summary={summary}
              type={type}
              createdAt={createdAt}
              handleClick={() => previewStory({ storyId: id })}
              isActive={selectedStory.id === id}
            />
          ))}
        </DashboardPage.StoryCardWrapper>
        <DashboardPage.StoryPreviewWrapper hasStories={Boolean(stories.length)}>
          <Suspense fallback={<SuspenseFallBack />}>
            {
              selectedStory.id
                ? (
                  <StoryPreview
                    summary={selectedStory.summary}
                    description={selectedStory.description}
                    type={selectedStory.type}
                    status={selectedStory.status}
                    complexity={selectedStory.complexity}
                    handleOpenModal={handleOpenModal}
                    userRole={userProfile.role}
                    userInfo={selectStoryPreview.createdBy}
                    createdAt={selectStoryPreview.createdAt}
                    processStoryRequest={processStoryRequest}
                  />
                )
                : <NoStoryPreview handleOpenModal={handleOpenModal} />
            }
          </Suspense>
        </DashboardPage.StoryPreviewWrapper>
      </DashboardPage.Wrapper>
      <Modal>
        <Suspense fallback={<SuspenseFallBack />}>
          <StoryForm />
        </Suspense>
      </Modal>
    </DashboardLayout>
  );
}

DashboardPage.Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media(max-width: 1024px) {
    flex-direction: column;
    overflow-y: auto;
    height: auto;
  }
`;

DashboardPage.StoryCardWrapper = styled.div`
  width: ${({ hasStories }) => (hasStories ? '20%' : '0px')};
  height: 100%;
  background: ${SNOW};
  overflow-y: auto;

  @media(max-width: 1024px) {
    width: 100%;
    height: ${({ hasStories }) => (hasStories ? '40%' : '0px')};
  }
`;

DashboardPage.StoryPreviewWrapper = styled.div`
  width: ${({ hasStories }) => (hasStories ? '80%' : '100%')};
  height: 100%;
  background-size: cover;
  padding-top: 1rem;

  @media(max-width: 1024px) {
    width: 100%;
    height: ${({ hasStories }) => (hasStories ? '60%' : '100%')};
    overflow-y: auto;
  }
`;

DashboardPage.propTypes = {
  logout: PropTypes.func.isRequired,
  pushPage: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  selectedStory: PropTypes.shape({
    id: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    complexity: PropTypes.string,
    createdAt: PropTypes.string,
    createdBy: PropTypes.oneOfType([
      PropTypes.string, PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
      }),
    ]),
  }).isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userProfile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  fetchStoriesRequest: PropTypes.func.isRequired,
  previewStory: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  processStoryRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, story }) => ({
  isAuthenticated: user.status.isAuthenticated,
  selectedStory: story.selectedStory,
  stories: story.stories,
  userProfile: user.profile,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (payload) => dispatch(logoutUser(payload)),
  pushPage: (page) => dispatch(push(page)),
  fetchStoriesRequest: () => dispatch(fetchStories()),
  previewStory: (payload) => dispatch(selectStoryPreview(payload)),
  handleOpenModal: (payload) => dispatch(openModal(payload)),
  processStoryRequest: (payload) => dispatch(processStory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
