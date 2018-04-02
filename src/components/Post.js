import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { removePost } from '../actions/posts'
import VoteScore from './VoteScore'
import CommentCount from './CommentCount'

function Post({
  post: { id, title, author, category, commentCount, timestamp, voteScore },
  remove
}) {
  return (
    <div className="box">
      <p className="title">{title}</p>
      <p className="subtitle  is-capitalized">Author: <strong>{author}</strong><br/>on <strong>
        {moment(timestamp).format('DD MMMM YYYY')}</strong> at <strong>
        {moment(timestamp).format('HH:MM')}</strong></p>
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
            className="level-item  button"
          >Details</Link>
          <Link
            to={`/edit-post/${id}`}
            className="level-item  button"
          >Edit</Link>
          <a
            onClick={() => remove({ id: id })}
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
