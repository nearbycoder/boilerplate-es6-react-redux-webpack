import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReposActions from '../../actions/ReposActions';
import { GithubRepos, FetchRepoInput } from '../../components';

class GithubReposList extends Component {

  static propTypes = {
    githubRepos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const { githubRepos: { repos, warning }, actions } = this.props;

    return (
      <div className='githubRepos'>
        <h1>Repo List</h1>
        <FetchRepoInput fetchRepos={actions.fetchRepos}></FetchRepoInput>
        <div>{ warning || null }</div>
        <GithubRepos actions={actions} repos={repos}></GithubRepos>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    githubRepos: state.githubRepos
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(ReposActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubReposList);
