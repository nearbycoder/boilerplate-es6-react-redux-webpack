import React, { Component, PropTypes } from 'react';

export default class GithubRepos extends Component {

  static propTypes = {
    repos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  owner () {
    if (this.props.repos.length > 0) {
      return this.props.repos[0].owner.login;
    } else {
      return null;
    }
  }

  renderList () {
    return this.props.repos.map((repo) =>
      (
        <li
          key={repo.id}
          {...this.props.actions}><a target='_blank' href={repo.html_url}>{repo.name}</a></li>
      )
    );
  }

  render () {
    return (
      <div>
      <h2>Owner: {this.owner()}</h2>
        <ul className='repoList'>
          {this.renderList()}
        </ul>
      </div>
    );
  }

}
