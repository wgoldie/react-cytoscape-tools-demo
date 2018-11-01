import React from 'react';
import styled from 'styled-components';
import Router from './Router';
import Header from './Header';

const AppWrapper = styled.div`
height: 100%;
width: 100%;
overflow: hidden;
display: flex;
flex-direction: column;
`;

const App = () => (
  <AppWrapper>
    <Router>
      <Header />
    </Router>
  </AppWrapper>
);

export default App;
