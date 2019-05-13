import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { editPost } from '../actions/posts'
import { capitalize } from '../utils/helpers'
import history from "../history"

let EditPost = ({ handleSubmit, categories, edit }) => {
  const onSubmit = (values) => {
    edit({
      post: values
    })
  }
  return (
    <div className="container">
      <h2 className="title">Edit Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <Field
              name="title"
              component="input"
              type="text"
              className="input"
              placeholder="Text input"
              required/>
          </div>
        </div>
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
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <Field
                name="category"
                component="select"
                required>
                {categories.map((category) => (
                  <option
                    key={category.path}
                    value={category.path}
                  >{capitalize(category.name)}</option>
                ))}
              </Field>
            </div>
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
          <div className="control  spacer">
            <button className="button  button--transition  is-link">Submit</button>
            <button
              onClick={history.goBack}
              className="button  button--transition  is-danger"
            >Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ categories, posts, form }, ownProps) => ({
  // Converts object into an array
  categories: Object.keys(categories).map((category) => categories[category]),
  // Load posts details into fields
  initialValues: posts.byId[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
  edit: (data) => dispatch(editPost(data))
})

EditPost = reduxForm({
  form: 'editPost'
})(EditPost)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)
