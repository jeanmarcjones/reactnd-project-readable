import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentCount from './CommentCount'
import VoteScore from './VoteScore'

class PostDetails extends Component {
  render() {
    const { post } = this.props

    // Waits till post has been populated before showing details
    return this.props.post
      ? <div className="container">
        <article className="media">
          <div className="media-content">
            <div className="content">
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
              <p style={{marginTop: 15}}>
                {post.body}
                <br/>
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>
          </div>
        </article>
      </div>
      : <p>Loading</p>
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts[ownProps.match.params.id],
})

export default connect(mapStateToProps)(PostDetails)
