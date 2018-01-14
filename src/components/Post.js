import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removePost } from '../actions/posts'
import VoteScore from './VoteScore'
import CommentCount from './CommentCount'

function Post(props) {
  return (
    <div className="box">
      <p className="title">{props.post.title}</p>
      <p className="subtitle  capitalise">Author: <strong>{props.post.author}</strong></p>
      <div className="level">
        <div className="level-left">
          <CommentCount
            count={props.post.commentCount}
            className="level-item"
          />
          <VoteScore
            info={{
              score: props.post.voteScore,
              id: props.post.id,
              component: 'posts'
            }}
            className="level-item"
          />
        </div>
        <div className="level-right">
          <Link
            to={`/${props.post.category}/${props.post.id}`}
            className="level-item  button"
          >Details</Link>
          <Link
            to={`/edit-post/${props.post.id}`}
            className="level-item  button"
          >Edit</Link>
          <a
            onClick={() => props.delete({ id: props.post.id })}
            className="level-item  button  is-danger  is-outlined"
          >Delete</a>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  delete: (data) => dispatch(removePost(data))
})

export default connect(
  null,
  mapDispatchToProps
)(Post)
