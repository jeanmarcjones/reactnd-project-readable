import React, { Component } from 'react';
import CategoriesNav from './CategoriesNav'
import Postslist from './PostsList'

class App extends Component {
  render() {
    return (
      <div>
        <header className="hero  is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Readable
              </h1>
            </div>
          </div>
        </header>
        <CategoriesNav/>
        <Postslist/>
      </div>
    );
  }
}

export default App;
