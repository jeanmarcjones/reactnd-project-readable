import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'
import { uuid, capitalize } from '../utils/helpers'

class PostsForm extends Component {
  state = {
    title: '',
    author: '',
    category: 'react',
    body: ''
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category, body } = this.state

    console.log('category', category);

    this.props.add({
      post: {
          id: uuid(),
          timestamp: Date.now(),
          title,
          body,
          author,
          category,
        }
    })
  }
  render() {
    const { title, author, category, body } = this.state

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                name="title"
                className="input"
                type="text"
                value={title}
                onChange={this.handleInputChange}
                placeholder="Text input"/>
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
                onChange={this.handleInputChange}
                placeholder="Text input"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <div className="select">
                <select
                  name="category"
                  value={category}
                  onChange={this.handleInputChange}>
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
                placeholder="Text input"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link">Submit</button>
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

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsForm)
