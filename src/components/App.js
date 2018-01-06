import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CategoriesNav from './CategoriesNav'
import PostsList from './PostsList'

class App extends Component {
  render() {
    return (
      <div>
        <header className="hero  is-primary">
          <div className="hero-body">
            <div className="container">
              <Link to="/">
                <h1 className="title">Readable</h1>
              </Link>
            </div>
          </div>
        </header>
        <CategoriesNav/>
        <Route
          exact
          path="/"
          render={() => (
            <PostsList filter={false} />
          )}/>
        <Route
          exact
          path="/react"
          render={() => (
            <PostsList filter={'react'} />
          )}/>
        <Route
          exact
          path="/redux"
          render={() => (
            <PostsList filter={'redux'} />
          )}/>
        <Route
          exact
          path="/udacity"
          render={() => (
            <PostsList filter={'udacity'} />
          )}/>
      </div>
    );
  }
}

export default App
