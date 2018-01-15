import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CommentsList from './CommentsLists'
import CommentCount from './CommentCount'
import VoteScore from './VoteScore'

class PostDetails extends Component {
  render() {
    const { post, match } = this.props

    // Waits till post has been populated before showing details
    return this.props.post
      ? <div className="container">
        <article className="media">
          <div className="media-content">
            <div className="content  post-details">
              <p className="title  is-3"><strong>{post.title}</strong></p>
              <p className="subtitle  is-5">By <strong>{post.author}</strong></p>
              <CommentCount count={post.commentCount}/>
              <VoteScore
                info={{
                  score: post.voteScore,
                  id: post.id,
                  component: 'posts'
                }}
              />
              <p className="post-details__body">
                {post.body}
              </p>
              <div className="post-details__buttons">
                <Link
                  to={`/edit-comment/${post.id}`}
                  className="button"
                >Edit</Link>
                <a
                  // onClick={() => props.delete({ id: post.id })}
                  className="button  is-danger  is-outlined"
                >Delete</a>
                <Link
                  to='/add-comment'
                  className="button  is-success  is-outlined"
                >Add Comment</Link>
              </div>
          </div>
          <CommentsList postId={match.params.id}/>
        </div>
        </article>
      </div>
      : <p>Loading</p>
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  const postId = ownProps.match.params.id

  return {
    post: posts.byId[postId]
  }
}

export default connect(mapStateToProps)(PostDetails)
