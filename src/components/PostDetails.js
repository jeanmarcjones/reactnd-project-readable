import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removePost } from "../actions/posts";
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
                  onClick={() => this.props.delete({ id: post.id })}
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

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts.byId[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
  delete: (data) => dispatch(removePost(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
