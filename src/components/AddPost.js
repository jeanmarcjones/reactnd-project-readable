import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../history'
import { createPost } from '../actions/posts'
import { uuid, capitalize } from '../utils/helpers'

class AddPost extends Component {
  state = {
    post: {
      id: '',
      title: '',
      author: '',
      category: 'react',
      body: ''
    }
  }
  handleInputChange = (e) => {
    const target = e.target
    const value =  target.value
    const name = target.name

    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { post } = this.state

    this.props.add({
      post: {
        ...post,
        id: uuid(),
        timestamp: Date.now()
      }
    })
  }
  render() {
    const { post: { title, author, category, body }} = this.state
    const { handleInputChange, handleSubmit } = this

    return (
      <div className="container">
        <h2 className="title">Add Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                name="title"
                className="input"
                type="text"
                value={title}
                onChange={handleInputChange}
                placeholder="Text input"
                required/>
            </div>
          </div>
          <div className="field">
            <label className="label">Author</label>
            <div className="control">
              <input
                name="author"
                className="input"
                type="text"
                value={author}
                onChange={handleInputChange}
                placeholder="Text input"
                required/>
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <div className="select">
                <select
                  name="category"
                  value={category}
                  onChange={handleInputChange}
                  required>
                  {this.props.categories.map((category) => (
                    <option
                      key={category.path}
                      value={category.path}
                    >{capitalize(category.name)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Body</label>
            <div className="control">
              <textarea
                name="body"
                className="textarea"
                value={body}
                onChange={this.handleInputChange}
                placeholder="Text input"
                required/>
            </div>
          </div>
          <div className="field">
            <div className="control  button--spacer">
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
}

const mapStateToProps = ({ categories }) => ({
  // Converts object into an array
  categories: Object.keys(categories).map((category) => categories[category])
})

const mapDispatchToProps = (dispatch) => ({
  add: (data) => dispatch(createPost(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost)
