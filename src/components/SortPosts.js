import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { sortPost } from '../actions/posts'

function SortPosts({ sort }) {
  return(
    <Fragment>
      <p className="tags--title  is-size-4  has-text-weight-semibold">
        Sort Posts:
      </p>
      <div className="tags">
        <span
          onClick={() => sort({ sortKey: 'voteScore' })}
          className="tag  is-medium"
        >Score</span>
        <span
          onClick={() => sort({ sortKey: 'timestamp' })}
          className="tag  is-medium"
        >Date</span>
      </div>
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
