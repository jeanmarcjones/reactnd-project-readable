import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removePost } from '../actions/posts'
import VoteScore from './VoteScore'
import CommentCount from './CommentCount'

function Post({ post, remove }) {
  return (
    <div className="box">
      <p className="title">{post.title}</p>
      <p className="subtitle  capitalise">Author: <strong>{post.author}</strong></p>
      <div className="level">
        <div className="level-left">
          <CommentCount
            count={post.commentCount}
            className="level-item"
          />
          <VoteScore
            info={{
              score: post.voteScore,
              id: post.id,
              component: 'posts'
            }}
            className="level-item"
          />
        </div>
        <div className="level-right">
          <Link
            to={`/${post.category}/${post.id}`}
            className="level-item  button"
          >Details</Link>
          <Link
            to={`/edit-post/${post.id}`}
            className="level-item  button"
          >Edit</Link>
          <a
            onClick={() => remove({ id: post.id })}
            className="level-item  button  is-danger  is-outlined"
          >Delete</a>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  remove: (data) => dispatch(removePost(data))
})

export default connect(
  null,
  mapDispatchToProps
)(Post)
