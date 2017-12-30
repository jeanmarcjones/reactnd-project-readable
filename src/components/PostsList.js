import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    return (
      <div className="section">
        <div className="tile  is-ancestor">
          {this.props.posts.map((post) => (
            <article key={post.id} className="tile  box">
              <p className="title">{post.title}</p>
              <p className="subtitle">Category: <strong>{post.category}</strong></p>
            </article>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: Object.keys(posts).map((post) => posts[post])
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
