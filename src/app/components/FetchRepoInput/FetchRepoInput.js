import React, { Component, PropTypes } from 'react';

export default class FetchReposInput extends Component {

  static propTypes = {
    fetchRepos: PropTypes.func.isRequired
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      username: ''
    };
  }

  handleChange (e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit (e) {
    const username = e.target.value.trim();
    if (e.which === 13) {
      this.props.fetchRepos({username: username});
      this.setState({ username: '' });
    }
  }

  render () {
    return (
      <input
        type='text'
        autoFocus='true'
        placeholder='Type a github usernames'
        value={this.state.username}
        onChange={::this.handleChange}
        onKeyDown={::this.handleSubmit} />
    );
  }
}
