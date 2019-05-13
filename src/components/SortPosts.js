import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { sortPost } from '../actions/posts'

const SortPosts = ({ sort }) => {
  return(
    <Fragment>
      <p className="level-item  sort-posts__title  is-size-4  has-text-weight-semibold">
        Sort Posts:
      </p>
      <button
        onClick={() => sort({ sortKey: 'voteScore' })}
        className="level-item  button  button--transition  is-medium"
      >Score</button>
      <button
        onClick={() => sort({ sortKey: 'timestamp' })}
        className="level-item  button  button--transition  is-medium"
      >Date</button>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({
  sort: (data) => dispatch(sortPost(data))
})

export default connect(
  null,
  mapDispatchToProps
)(SortPosts)
