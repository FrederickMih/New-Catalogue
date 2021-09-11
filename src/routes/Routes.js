import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Main from '../Components/Container/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
