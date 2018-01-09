import React from 'react'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'
import CommentCount from './CommentCount'

function Post(props) {
  return (
    <div className="box">
      <p className="title">{props.post.title}</p>
      <p className="subtitle  capitalise">Author: <strong>{props.post.author}</strong></p>
      <CommentCount count={props.post.commentCount}/>
      <VoteScore
        info={{
          score: props.post.voteScore,
          id: props.post.id,
          component: 'posts'
        }}
      />
      <Link
        to={`/post/${props.post.id}`}
        style={{marginLeft: '20px'}}
      >Info</Link>
    </div>
  )
}

export default Post
