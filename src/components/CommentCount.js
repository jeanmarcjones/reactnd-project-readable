import React from 'react'
import GoComment from 'react-icons/lib/go/comment'

function CommentCount({ count }) {
  return (
    <div className="comment-count">
      <GoComment style={{ verticalAlign: 'text-top' }}/> {count}
    </div>
  )
}

export default CommentCount
