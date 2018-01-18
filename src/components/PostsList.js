import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'

function PostsList({ posts, match }) {
  return (
    <div className="container">
      <div className="level">
        <div className="level-item  has-text-centered">
          <Link
            to='/add-post'
            className="level-item  button  is-success  is-outlined"
          >Add post</Link>
        </div>
      </div>
      {posts
        .filter((post) => match.params.category ? post.category === match.params.category : true)
        .map((post) => (
          <Post key={post.id} post={post}/>
      ))}
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  // Converts object into an array
  posts: posts.allIds.map((id) => posts.byId[id])
})

export default connect(mapStateToProps)(PostsList)
