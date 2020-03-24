/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PRIMARY } from 'Styles/colors.styles';
import Typography from 'Ui/Typography';
import Logo from 'Ui/Logo';

const backgroundURL = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?cs=srgb&dl=photo-of-person-holding-mobile-phone-3183153.jpg&fm=jpg';

export default function AuthenticationLayout({ children }) {
  return (
    <AuthenticationLayout.Wrapper>
      <AuthenticationLayout.Content>{children}</AuthenticationLayout.Content>
      <AuthenticationLayout.Overlay>
        <AuthenticationLayout.OverlayContent>
          <Logo size="normal" />
          <Typography type="h2">Track your project and much more in one place.</Typography>
        </AuthenticationLayout.OverlayContent>
      </AuthenticationLayout.Overlay>
    </AuthenticationLayout.Wrapper>
  );
}

AuthenticationLayout.Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

AuthenticationLayout.Content = styled.main`
  width: 35%;
  @media(max-width: 1024px) {
    width: 100%;
  }
`;

AuthenticationLayout.Overlay = styled.section`
  width: 65%;
  height: 100vh;
  background-color: ${PRIMARY};
  background: url(${backgroundURL});
  background-size: cover;
  @media(max-width: 1024px) {
    display: none;
  }
`;

AuthenticationLayout.OverlayContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

AuthenticationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export function withAuthenticationLayout(Component) {
  return function render(props) {
    return (
      <AuthenticationLayout>
        <Component {...props} />
      </AuthenticationLayout>
    );
  };
}
