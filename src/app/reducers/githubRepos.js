import * as types from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  warning: false,
  repos: []
};

export default function reducer (state = initialState, action) {
  switch (action.type) {

    case types.FETCH_REPOS:
      return {
        ...state
      };

    case types.RECEIVE_REPOS:
      return {
        ...state, warning: false, fetching: false, repos: action.payload.filter(repo => { return repo.fork === false; })
      };

    case types.ERR_RECEIVE_REPOS:
      return {
        ...state, warning: 'User Not Found', fetching: false, repos: []
      };

    default:
      return state;
  }
}

