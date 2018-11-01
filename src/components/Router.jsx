import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Demos from './Demos';

const Router = () => (
  <Router>
    <Switch>
      {
        Demos.map(Demo => <Route path={Demo.path} component={Demo} />)
      }
    </Switch>
  </Router>
);

export default Router;
