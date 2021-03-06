import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { fetchCategories } from "../actions/categories";
import { fetchPostsWithComments } from '../actions/posts'
import CategoriesNav from './CategoriesNav'
import PostsList from './PostsList'
import PostDetails from './PostDetails'
import AddPost from './AddPost'
import EditPost from './EditPost'

class App extends Component {
  componentDidMount() {
    const { fetchCategories, fetchPostsWithComments } = this.props
    fetchCategories()
    fetchPostsWithComments()
  }
  render() {
    return (
      <Fragment>
        <header className="hero  is-primary">
          <div className="hero-body">
            <div className="container">
              <Link to="/">
                <h1 className="title  title--link">Readable</h1>
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
              path="/add-post"
              render={() => (
                <AddPost/>
              )}/>
            <Route
              exact
              path="/edit-post/:id"
              render={(props) => (
                <EditPost {...props}/>
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
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  fetchCategories,
  fetchPostsWithComments,
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App))
