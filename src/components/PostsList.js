import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    const { posts, filter } = this.props

    return (
      <div className="section">
        {posts
          .filter((post) => {
            if(filter) {
              return post.category === filter
            } else {
              return true
            }
          })
          .map((post) => (
          <div key={post.id} className="box">
            <p className="title  tile">{post.title}</p>
            <p className="subtitle  tile">Category: <strong>{post.category}</strong></p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  // Converts object into an array
  posts: Object.keys(posts).map((post) => posts[post])
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
