import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removePost } from '../actions/posts'

class DeleteButton extends Component {
  render() {
    const { info, deletePost } = this.props

    console.log('props', this.props);

    return info.component === 'posts'
      ? <p
        onClick={() => deletePost({ id: info.id, component: info.component })}
        className="button  is-danger  is-outlined"
      >Delete</p>
      : <p
        className="button  is-danger  is-outlined"
      >Delete</p>
  }
}

export const mapDispatchToProps = (dispatch) => ({
  deletePost: (data) => dispatch(removePost(data))
})

export default connect(
  null,
  mapDispatchToProps
)(DeleteButton)
