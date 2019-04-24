import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { editComment } from "../actions/comments";
import { editCommentModalClose } from "../actions/modal";

let EditComment = ({ id, edit, handleSubmit, closeEditCommentModal }) => {
  const onSubmit = (values) => {
    edit({
      comment: {
        ...values,
        id: id
      }
    })
    closeEditCommentModal()
  }
  return (
    <div className="">
      <h2 className="title">Edit Comment</h2>
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
            <button className="button  button--transition is-link">Submit</button>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              onClick={() => closeEditCommentModal()}
              className="button  button--transition is-link  is-danger"
            >Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ comments }, ownProps) => ({
  // Load posts details into fields
  initialValues: comments.byId[ownProps.id]
})

const mapDispatchToProps = (dispatch) => ({
  edit: (data) => dispatch(editComment(data)),
  closeEditCommentModal: (data) => dispatch(editCommentModalClose(data)),
})

EditComment = reduxForm({
  form: 'editComment'
})(EditComment)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComment)
