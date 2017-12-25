import React, { Component } from 'react'

class CategoriesNav extends Component {
  render() {
    return (
      <div className="tabs  is-centered">
        <ul>
          <li><a>Pictures</a></li>
          <li><a>Music</a></li>
          <li><a>Videos</a></li>
          <li><a>Documents</a></li>
        </ul>
      </div>
    );
  }
}

export default CategoriesNav
