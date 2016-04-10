import * as types from '../constants/ActionTypes';
import { createResourceAction } from 'redux-resource';

export const fetchRepos = createResourceAction(
  'https://api.github.com/users/:username/repos?page=1&per_page=100', types.FETCH_REPOS, types.RECEIVE_REPOS, types.ERR_RECEIVE_REPOS
);
