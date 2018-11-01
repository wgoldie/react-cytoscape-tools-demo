import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Demos from './Demos';

const DemoWrapper = styled.div`
flex: 5;
background-color: #222;
overflow: hidden;
`;

const AppRouter = ({ children }) => (
  <Router>
    <Fragment>
      { children }
      <DemoWrapper>
        <Switch>
          {
            Demos.map(Demo => (
              <Route
                key={Demo.path}
                path={`/${Demo.path}`}
                component={Demo}
              />)
            )
          }
        </Switch>
      </DemoWrapper>
    </Fragment>
  </Router>
);

export default AppRouter;
