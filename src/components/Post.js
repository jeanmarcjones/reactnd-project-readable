import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removePost } from '../actions/posts'
import VoteScore from './VoteScore'
import CommentCount from './CommentCount'
import { dateFormat } from '../utils/helpers'

function Post({
  post: { id, title, author, category, commentCount, timestamp, voteScore },
  remove
}) {
  return (
    <div className="box">
      <Link
        to={`/${category}/${id}`}
        className="title  title__link"
      >{title}</Link>
      <p className="subtitle  is-5">By <strong>{author}</strong></p>
      <p className="subtitle  capitalise">
        On <strong>{dateFormat(timestamp, 'DD MMMM YYYY')}</strong> at
        <strong> {dateFormat(timestamp, 'HH:MM')}</strong>
      </p>
      <div className="level">
        <div className="level-left">
          <CommentCount
            count={commentCount}
            className="level-item"
          />
          <VoteScore
            info={{
              score: voteScore,
              id: id,
              component: 'posts'
            }}
            className="level-item"
          />
        </div>
        <div className="level-right">
          <Link
            to={`/${category}/${id}`}
            className="level-item  button  button--transition"
          >Details</Link>
          <Link
            to={`/edit-post/${id}`}
            className="level-item  button  button--transition"
          >Edit</Link>
          <a
            onClick={() => remove({ id: id })}
            className="level-item  button  button--transition  is-danger  is-outlined"
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
