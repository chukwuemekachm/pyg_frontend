import React from 'react';
import styled from 'styled-components';

import Typography from 'Ui/Typography';

export default function ErrorFallBack() {
  return (
    <ErrorFallBack.Wrapper>
      <Typography type="h1">An error just occurred!</Typography>
      <Typography>Please reload the page and try again!</Typography>
    </ErrorFallBack.Wrapper>
  );
}

ErrorFallBack.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
