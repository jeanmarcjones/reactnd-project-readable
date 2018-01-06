import React from 'react'
import GoComment from 'react-icons/lib/go/comment'

function Post(props) {
  return (
    <div className="box">
      <p className="title">{props.post.title}</p>
      <p className="subtitle  capitalise">Author: <strong>{props.post.author}</strong></p>
      <p><GoComment style={{ verticalAlign: 'text-top' }}/> {props.post.commentCount}</p>
    </div>
  )
}

export default Post
