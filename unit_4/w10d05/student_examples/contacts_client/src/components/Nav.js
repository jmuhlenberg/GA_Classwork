import React, { Component } from 'react'

import DynamicComponent from './DynamicComponent'

export default class Nav extends Component {
  state = {
    contentTitle: ''
  }
  loadComponent = loadComponent => {
    this.setState({ contentTitle: loadComponent })
  }
  render() {
    return (
      <nav>
        <h2 onClick={() => this.loadComponent('')}>Nav</h2>
        <ul>
          <li onClick={() => this.loadComponent('about')}>About</li>
          <li onClick={() => this.loadComponent('contact')}>Contact</li>
        </ul>
        <DynamicComponent contentTitle={this.state.contentTitle} />
      </nav>
    )
  }
}
