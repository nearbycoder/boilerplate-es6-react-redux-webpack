import { combineReducers } from 'redux';
import githubRepos from './githubRepos';

const rootReducer = combineReducers({
  githubRepos
});

export default rootReducer;
