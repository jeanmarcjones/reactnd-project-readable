import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import CategoriesNav from './CategoriesNav'
import PostsList from './PostsList'
import PostDetails from './PostDetails'

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
        <div className="section">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <PostsList {...props}/>
              )}/>
            <Route
              exact
              path="/:type"
              render={(props) => (
                <PostsList {...props}/>
              )}/>
            <Route
              exact
              path="/post/:id"
              render={(props) => (
                <PostDetails {...props}/>
              )}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App
