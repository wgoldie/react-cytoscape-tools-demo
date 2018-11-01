import React, { Component } from 'react';
import styled from 'styled-components';
import Router from './Router';
import Header from './Header';

const AppWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <Header />
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
