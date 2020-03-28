import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavBar from 'Ui/NavBar';
import SEO from 'Helpers/SEO';

export default function DashboardLayout({ name, handleUserLogout, children }) {
  return (
    <DashboardLayout.Wrapper>
      <SEO title={name} />
      <NavBar name={name} handleUserLogout={handleUserLogout} />
      <DashboardLayout.Content>
        {children}
      </DashboardLayout.Content>
    </DashboardLayout.Wrapper>
  );
}

DashboardLayout.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

DashboardLayout.Content = styled.main`
  width: 100%;
  height: calc(100vh - 4.7rem);
`;

DashboardLayout.propTypes = {
  name: PropTypes.string.isRequired,
  handleUserLogout: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
