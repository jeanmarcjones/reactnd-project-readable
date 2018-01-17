import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeComment } from '../actions/comments'
import VoteScore from './VoteScore'

function Comment(props) {
  return (
    <article className="media">
      <div className="media-content">
        <div  className="content  comment">
          <h4 className="title">{props.comment.body}</h4>
          <h5 className="subtitle">By <strong>{props.comment.author}</strong></h5>
          <div className="level">
            <div className="level-left">
              <VoteScore
                info={{
                  score: props.comment.voteScore,
                  id: props.comment.id,
                  component: 'comments'
                }}
              />
            </div>
            <div className="level-right">
              <Link
                to={`/edit-comment/${props.comment.id}`}
                className="level-item  button"
              >Edit</Link>
              <a
                onClick={() => props.delete({ id: props.comment.id })}
                className="level-item  button  is-danger  is-outlined"
              >Delete</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

const mapDispatchToProps = (dispatch) => ({
  delete: (data) => dispatch(removeComment(data))
})

export default connect(
  null,
  mapDispatchToProps
)(Comment)
