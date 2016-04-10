import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layouts extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='main'>
        <Header></Header>
        <div className='body'>
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

