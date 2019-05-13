import React from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
  return comments.length > 0
    ? comments.map((comment) => (
      <Comment key={comment.id}  comment={comment}/>
    ))
    : <article className="media">
      <div className="media-content">
        <div className="content">
          <p>This posts has no comments.</p>
        </div>
      </div>
    </article>
}

const mapStateToProps = ({ comments }, ownProps) => ({
  comments: comments.allIds
    .filter((id) => comments.byId[id].parentId === ownProps.postId)
    .map((id) => comments.byId[id])
})

export default connect(
  mapStateToProps
)(CommentsList)
