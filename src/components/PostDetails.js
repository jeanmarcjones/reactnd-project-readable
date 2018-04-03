import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { removePost } from "../actions/posts"
import  { addCommentModalOpen, addCommentModalClose, editCommentModalClose } from '../actions/modal'
import CommentsList from './CommentsLists'
import CommentCount from './CommentCount'
import VoteScore from './VoteScore'
import AddComment from './AddComment'
import EditComment from './EditComment'
import NoMatch from './NoMatch'
import { dateFormat } from '../utils/helpers'

function PostDetails({
  post,
  match,
  remove,
  addCommentModalOpen,
  openAddCommentModal,
  closeAddCommentModal,
  editCommentModalOpen,
  closeEditCommentModal,
  commentToEdit
}) {
  // Waits till post has been populated before showing details
  return post
    ? <div className="container">
      <article className="media">
        <div className="media-content">
          <div className="content  post-details">
            <p className="title  is-3"><strong>{post.title}</strong></p>
            <p className="subtitle  is-5">By <strong>{post.author}</strong></p>
            <p className="subtitle  capitalise">
              On <strong>{dateFormat(post.timestamp, 'DD MMMM YYYY')}</strong> at
              <strong> {dateFormat(post.timestamp, 'HH:MM')}</strong>
            </p>
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
                to={`/edit-post/${post.id}`}
                className="button"
              >Edit</Link>
              <a
                onClick={() => remove({ id: post.id })}
                className="button  is-danger  is-outlined"
              >Delete</a>
              <div
                onClick={() => openAddCommentModal()}
                className="button  is-success  is-outlined"
              >Add Comment</div>
            </div>
        </div>
        <CommentsList postId={match.params.id}/>
      </div>
      </article>
      {addCommentModalOpen && (
        <Modal
          isOpen={addCommentModalOpen}
          onRequestClose={closeAddCommentModal}
          contentLabel='Add Comment'
          appElement={document.getElementById('root')}
        >
          {addCommentModalOpen && (
            <AddComment id={post.id}/>
          )}
        </Modal>
      )}
      {editCommentModalOpen && (
        <Modal
          isOpen={editCommentModalOpen}
          onRequestClose={closeEditCommentModal}
          contentLabel='Add Comment'
          appElement={document.getElementById('root')}
        >
          {editCommentModalOpen && (
            <EditComment id={commentToEdit}/>
          )}
        </Modal>
      )}
    </div>
    : <NoMatch/>
}

const mapStateToProps = ({ posts, modal }, ownProps) => ({
  post: posts.byId[ownProps.match.params.id],
  addCommentModalOpen: modal.addCommentModalOpen,
  editCommentModalOpen: modal.editCommentModalOpen.isOpen,
  commentToEdit: modal.editCommentModalOpen.commentId
})

const mapDispatchToProps = (dispatch) => ({
  remove: (data) => dispatch(removePost(data)),
  openAddCommentModal: (data) => dispatch(addCommentModalOpen(data)),
  closeAddCommentModal: (data) => dispatch(addCommentModalClose(data)),
  closeEditCommentModal: (data) => dispatch(editCommentModalClose(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
