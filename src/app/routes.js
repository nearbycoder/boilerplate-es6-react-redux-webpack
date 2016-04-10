import React from 'react';
import { Route } from 'react-router';
import { Layout, Home } from './components';
import GitHubReposList from './containers/GithubReposList/GithubReposList.js';

export default (
  <Route component={Layout}>
    <Route path='/' component={Home} />
    <Route path='/repos' component={GitHubReposList} />
  </Route>
);
