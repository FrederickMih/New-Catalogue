import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Main from '../Components/Container/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
