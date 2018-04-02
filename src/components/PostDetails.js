import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import moment from 'moment'
import { removePost } from "../actions/posts"
import  { addCommentModalOpen, addCommentModalClose, editCommentModalClose } from '../actions/modal'
import CommentsList from './CommentsLists'
import CommentCount from './CommentCount'
import VoteScore from './VoteScore'
import AddComment from './AddComment'
import EditComment from './EditComment'
import NoMatch from './NoMatch'

function PostDetails({
  post,
  post: { id, title, author, body, commentCount, voteScore, timestamp  },
  match,
  remove,
  addCommentModalOpen,
  openAddCommentModal,
  closeAddCommentModal,
  editCommentModalOpen,
  closeEditCommentModal,
  commentToEdit,
}) {
  // Waits till post has been populated before showing details
  return post
    ? <div className="container">
      <article className="media">
        <div className="media-content">
          <div className="content  post-details">
            <p className="title  is-3"><strong>{title}</strong></p>
            <p className="subtitle  is-5">By <strong>{author}</strong></p>
            <p className="subtitle  capitalise">
              on <strong>{moment(timestamp).format('DD MMMM YYYY')}</strong>
              at <strong>{moment(timestamp).format('HH:MM')}</strong>
            </p>
            <CommentCount count={commentCount}/>
            <VoteScore
              info={{
                score: voteScore,
                id: id,
                component: 'posts'
              }}
            />
            <p className="post-details__body">
              {body}
            </p>
            <div className="post-details__buttons">
              <Link
                to={`/edit-post/${id}`}
                className="button"
              >Edit</Link>
              <a
                onClick={() => remove({ id: id })}
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
            <AddComment id={id}/>
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
