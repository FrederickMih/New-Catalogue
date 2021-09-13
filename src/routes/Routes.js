import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Main from '../Components/Container/Main';
import MoreDetailedArticle from '../Components/Presentation/MoreDetailedArticle';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/article/:id" component={MoreDetailedArticle} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
