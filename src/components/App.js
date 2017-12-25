import React, { Component } from 'react';
import CategoriesNav from './CategoriesNav'

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
      </div>
    );
  }
}

export default App;
