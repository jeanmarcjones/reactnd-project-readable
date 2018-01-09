import React from 'react'
import GoComment from 'react-icons/lib/go/comment'

function CommentCount(props) {
  return (
    <div className="comment-count">
      <GoComment style={{ verticalAlign: 'text-top' }}/> {props.count}
    </div>
  )
}

export default CommentCount
