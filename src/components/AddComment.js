import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createComment } from "../actions/comments";
import { addCommentModalClose } from "../actions/modal";
import { uuid } from "../utils/helpers";

let AddComment = ({ id, add, handleSubmit, closeAddCommentModal }) => {
  const onSubmit = (values) => {
    add({
      comment: {
        ...values,
        id: uuid(),
        timestamp: Date.now(),
        parentId: id
      }
    })
    closeAddCommentModal()
  }
  return (
    <div className="">
      <h2 className="title">Add Comment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <Field
              name="author"
              component="input"
              type="text"
              className="input"
              placeholder="Text input"
              required/>
          </div>
        </div>
        <div className="field">
          <label className="label">Body</label>
          <div className="control">
            <Field
              name="body"
              component="textarea"
              className="textarea"
              placeholder="Text input"
              required/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              onClick={() => closeAddCommentModal()}
              className="button is-link  is-danger"
            >Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  add: (data) => dispatch(createComment(data)),
  closeAddCommentModal: (data) => dispatch(addCommentModalClose(data))
})

AddComment = reduxForm({
  form: 'addComment'
})(AddComment)

export default connect(
  null,
  mapDispatchToProps
)(AddComment)
