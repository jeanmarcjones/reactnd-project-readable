import React from 'react'

function SortPosts({}) {
  return(
    <div>
      <p className="tags--title  is-size-4  has-text-weight-semibold">
        Sort Posts:
      </p>
      <div className="tags">
        <span className="tag  is-medium">Score</span>
        <span className="tag  is-medium">Date</span>
      </div>
    </div>
  )
}

export default SortPosts
