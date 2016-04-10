import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render () {
    return (
      <div className='header'>
        <ul className='nav'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/repos'>Repos</Link></li>
        </ul>
      </div>
    );
  }
}
