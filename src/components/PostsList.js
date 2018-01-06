import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'
import Post from './Post'

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
            <Post key={post.id} post={post}/>
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
