import React from 'react'
import { connect } from 'react-redux'
import { removeComment } from '../actions/comments'
import { editCommentModalOpen } from '../actions/modal'
import VoteScore from './VoteScore'

function Comment({
 comment: { id, author, body, voteScore },
 remove,
 openModal
}) {
  return (
    <article className="media">
      <div className="media-content">
        <div  className="content  comment">
          <h4 className="title">{body}</h4>
          <h5 className="subtitle">By <strong>{author}</strong></h5>
          <div className="level">
            <div className="level-left">
              <VoteScore
                info={{
                  score: voteScore,
                  id: id,
                  component: 'comments'
                }}
              />
            </div>
            <div className="level-right">
              <a
                onClick={() => openModal({ id: id })}
                className="level-item  button"
              >Edit</a>
              <a
                onClick={() => remove({ id: id })}
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
  openModal: (data) => dispatch(editCommentModalOpen(data)),
  remove: (data) => dispatch(removeComment(data))
})

export default connect(
  null,
  mapDispatchToProps
)(Comment)
