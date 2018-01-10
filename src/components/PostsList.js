import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class PostsList extends Component {
  render() {
    const { posts, match } = this.props

    return (
      <div className="container">
        {posts
          .filter((post) => match.params.category ? post.category === match.params.category : true)
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

export default connect(mapStateToProps)(PostsList)
