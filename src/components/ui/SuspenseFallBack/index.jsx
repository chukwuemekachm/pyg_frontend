import React from 'react';
import styled from 'styled-components';

import Spinner from 'Ui/Spinner';

export default function SuspenseFallBack() {
  return <SuspenseFallBack.Wrapper><Spinner size="large" /></SuspenseFallBack.Wrapper>;
}

SuspenseFallBack.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
