import React from 'react'
import VoteScore from './VoteScore'
import GoComment from 'react-icons/lib/go/comment'

function Post(props) {
  return (
    <div className="box">
      <p className="title">{props.post.title}</p>
      <p className="subtitle  capitalise">Author: <strong>{props.post.author}</strong></p>
      <div className='post__comment-count'>
        <GoComment style={{ verticalAlign: 'text-top' }}/> {props.post.commentCount}
      </div>
      <VoteScore
        info={{
          score: props.post.voteScore,
          id: props.post.id,
          component: 'posts'
        }}
      />
    </div>
  )
}

export default Post
