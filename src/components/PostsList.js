import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'
import Post from './Post'

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    const { posts, match } = this.props

    return (
      <div className="container">
        {posts
          .filter((post) => {
            if(match.params.type) {
              return post.category === match.params.type
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
