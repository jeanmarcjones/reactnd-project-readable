import React from 'react'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'

function Comment({ comment }) {
  return (
    <article className="media">
      <div className="media-content">
        <div  className="content  comment">
          <h4 className="title">{comment.body}</h4>
          <h5 className="subtitle">By <strong>{comment.author}</strong></h5>
          <div className="level">
            <div className="level-left">
              <VoteScore
                info={{
                  score: comment.voteScore,
                  id: comment.id,
                  component: 'posts'
                }}
              />
            </div>
            <div className="level-right">
              <Link
                to={`/edit-comment/${comment.id}`}
                className="level-item  button"
              >Edit</Link>
              <a
                // onClick={() => props.delete({ id: comment.id })}
                className="level-item  button  is-danger  is-outlined"
              >Delete</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Comment
