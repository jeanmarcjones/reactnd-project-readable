import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { fetchPosts } from '../actions/posts'
import CategoriesNav from './CategoriesNav'
import PostsList from './PostsList'
import PostDetails from './PostDetails'

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
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
              path="/:category"
              render={(props) => (
                <PostsList {...props}/>
              )}/>
            <Route
              exact
              path="/:category/:id"
              render={(props) => (
                <PostDetails {...props}/>
              )}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts
}

export default connect(
  null,
  mapDispatchToProps,
  null,
  { pure: false }
)(App)
