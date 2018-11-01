import React, { Component } from 'react';
import styled from 'styled-components';
import Router from './components/Router';
import Header from './components/Header';

const AppWrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Router />
      </AppWrapper>
    );
  }
}

export default App;
